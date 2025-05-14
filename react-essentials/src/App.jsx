import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import TabButton from './TabButton';
import { EXAMPLES } from './topicData'


function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <>
      <Header reactLogo={reactLogo} viteLogo={viteLogo} />
      <table>
        <tbody>
          <tr>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>test</TabButton>
          </tr>
        </tbody>
      </table>
      <div id="tab-content">
        <h3>{ EXAMPLES[selectedTopic].title }</h3>
        <p>{ EXAMPLES[selectedTopic].description }</p>
        <pre>
          <code>{ EXAMPLES[selectedTopic].code }</code>
        </pre>
      </div>
    </>
  )
}

export default App