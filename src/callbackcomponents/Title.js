import React from 'react'

function Title() {
    console.log('title')
    return (
        <div>
            <h1>using callback hook</h1>
        </div>
    )
}

export default React.memo(Title) 
