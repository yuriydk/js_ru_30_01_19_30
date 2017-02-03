import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
    const {articles} = props

    const articleElements = articles.map(a => <li key={a.id}>
        <Article article={a} defaultOpen={true}/>
    </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}
