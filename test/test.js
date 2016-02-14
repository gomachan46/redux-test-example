import React from 'react'
import TestUtils from 'react-addons-test-utils'
import App from '../components/App'
import assert from 'power-assert'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/Footer'

function setup() {
    let props = {}
    let renderer = TestUtils.createRenderer()
    renderer.render(<App {...props} />)
    let output = renderer.getRenderOutput()

    return {
        props,
        output,
        renderer
    }
}

describe("App", () => {
    const { output } = setup()

    it("outputとしてdivが返ってくること", () => {
        assert(output.type === 'div')
    })

    describe("div内", () => {
        const expected = output.props.children

        it("要素は3つかえってくること", () => {
            assert(expected.length === 3)
        })
        it("1番目の要素としてAddTodoが返ってくること", () => {
            assert(expected[0].type === AddTodo)
        })
        it("2番目の要素としてVisibleTodoListが返ってくること", () => {
            assert(expected[1].type === VisibleTodoList)
        })
        it("3番目の要素としてFooterが返ってくること", () => {
            assert(expected[2].type === Footer)
        })
    })
})
