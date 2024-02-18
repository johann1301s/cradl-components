import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'

type Props = {
    title: string
    script: string
    url?: string
    port?: number
    version?: string
}

const Html = (props: Props) => {

    return (
        <html lang='no'>
            <head>
                <meta charSet='UTF-8'/>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'/>
                <title>
                    {props.title}
                </title>
            </head>
            <body style={{margin: 0}}>
                <script
                    type='application/json'
                    id='injected' dangerouslySetInnerHTML={{__html: JSON.stringify({
                        url: props.url,
                        port: props.port,
                        version: props.version
                    })}}/>
                <div id='root'/>
                <script dangerouslySetInnerHTML={{
                    __html: props.script
                }}/>
            </body>
        </html>
    )
}

export const renderHTML = (arg: {
    script: string
    url?: string
    port?: number
    version?: string
}) => {
    return {
        html: ['<!DOCTYPE html>', renderToStaticMarkup((
            <Html
                title='Cradl AI Components'
                url={arg.url}
                port={arg.port}
                version={arg.version}
                script={arg.script}/>
        ))].join('\n')
    }
}
