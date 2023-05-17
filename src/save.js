import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-tabs',
    }) }>
    
      <div className='uncommon-tabs-nav'>
        { attributes.tabs.map((tab, index) => {
          return (
          <a href={`#tab-${index}`} className='uncommon-tab-title' dangerouslySetInnerHTML={{__html: tab.title}}></a>
          )
        })}
      </div>
      <div className="uncommon-tab-content-wrapper">
        { attributes.tabs.map((tab, index) => {
          return (
              <div id={`tab-${index}`} className='uncommon-tab-content' dangerouslySetInnerHTML={{__html: tab.content}}></div>
        )})}
      </div>
		</div>
	);
}
