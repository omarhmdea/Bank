import React, { Component } from 'react'

export default class Breakdown extends Component {
    getTotalTransCategory = () => {
        const arr = this.props.transaction
        let catgory = {}
        for (let index = 0; index < arr.length; index++) {
            catgory[arr[index].category] = arr.filter(f => f.category === arr[index].category).reduce((acc, c) => acc + c.amount, 0)
        }
        return catgory
    }
    render() {
        const catgory = this.getTotalTransCategory()
        return (
            <>
                {Object.keys(catgory).map(
                    c => <div className='category-total'>Category {c} : {catgory[c]}</div>
                )}
            </>
        )
    }
}