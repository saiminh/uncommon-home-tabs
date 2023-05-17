import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  
	return (
		<div { ...useBlockProps({
      className: 'uncommon-tabs',
    }) }>
      <div className='uncommon-tabs-wrapper'>
        { attributes.tabs.map((tab, index) => {
          return (
            <div className="uncommon-tab">
              <RichText
                className='uncommon-tab-title'
                tagName="h3"
                value={tab.title}
                onChange={(value) => {
                  const newTabs = [...attributes.tabs];
                  newTabs[index].title = value;
                  setAttributes({ tabs: newTabs });
                }}
              />
              <RichText
                className='uncommon-tab-content'
                tagName="div"
                multiline="p"
                value={tab.content}
                onChange={(value) => {
                  const newTabs = [...attributes.tabs];
                  newTabs[index].content = value;
                  setAttributes({ tabs: newTabs });
                }}
              />
              <button
                onClick={() => {
                  const newTabs = [...attributes.tabs];
                  newTabs.splice(index, 1);
                  setAttributes({ tabs: newTabs });
                }}
              >Remove tab</button>
            </div>
          )}
        )}
      </div>
      <button 
        onClick={() => {
          const newTabs = [...attributes.tabs];
          newTabs.push({title: 'Tab Title', content: 'Tab Content'});
          setAttributes({ tabs: newTabs });
        }}
        className='uncommon-tabs__add-tab-button'
      >Add tab</button>
		</div>
	);
}
