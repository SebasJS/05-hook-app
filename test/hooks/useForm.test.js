import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Joan Gomez',
    email: 'joan@react.com'
  }
  test('debe de regresar los valores por defecto', () => {
    
    const { result } = renderHook(() => useForm(initialForm))
    expect( result.current ).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any( Function ),
      onInputReset: expect.any( Function )
    })
  });

  test('debe de cambiar el nombre del formulario', () => {
    const newValue = 'Sebastian'

    const { result } = renderHook(() => useForm())
    const { onInputChange } = result.current

    act(() => {
      onInputChange({target: {name: 'name', value: newValue}})
    })

    expect( result.current.name ).toEqual(newValue)
    expect( result.current.formState.name ).toBe(newValue)
  });

  test('debe de cambiar el nombre del formulario', () => {
    const newValue = 'Sebastian'

    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onInputReset } = result.current

    act(() => {
      onInputChange({target: {name: 'name', value: newValue}})
      onInputReset()
    })

    expect( result.current.name ).toEqual(initialForm.name)
    expect( result.current.formState.name ).toBe(initialForm.name)
  });
});