import React from 'react'
import ReactMde from 'react-mde'
import Showdown from 'showdown'

const Editor = ({currentNote, updateNote}) => {
    const [selectedTab, setSelectedTab] = React.useState('write')

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    })

  return (
    <section className='pane editor'>
        <ReactMde 
            value={currentNote.body}
            onChange={updateNote}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(mackdown) =>
            Promise.resolve(converter.makeHtml(mackdown))
            }
            minEditorHeight={80}
            heightUunits='vh'
        />

    </section>
  )
}

export default Editor