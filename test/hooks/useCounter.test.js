/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas al hook useCounter', () => {
  test('debe retornar los valores esperados del useCounter', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current

    expect( counter ).toBe( 10 )
    expect( increment ).toEqual( expect.any( Function ))
    expect( decrement ).toEqual( expect.any( Function ))
    expect( reset ).toEqual( expect.any( Function ))

  });

  test('debe de generar el counter con la funcion increment', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter, increment } = result.current;

    act(() =>{
      increment();
      increment(2);
    })

    expect( result.current.counter ).toBe( 103 );

  });

  test('debe de generar el counter con la funcion decrement', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter, decrement } = result.current;

    act(() =>{
      decrement();
      decrement(2);
    })

    expect( result.current.counter ).toBe( 97 );

  });

  test('debe de generar el counter con la funcion reset', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter, increment, decrement, reset } = result.current;

    act(() =>{
      increment(5)
      decrement(100)
      reset()
    })

    expect( result.current.counter ).toBe( 100 );

  });

});