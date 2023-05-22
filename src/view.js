window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.uncommon-tab-title');
    const tabContent = document.querySelectorAll('.uncommon-tab-content');
    tabs[0].classList.add('active');
    tabContent[0].classList.add('active'); 

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          const target = tabContent[index];

          tabContent.forEach(thistabContent => {
              thistabContent.classList.remove('active');
          })

          tabs.forEach(thistab => {
              thistab.classList.remove('active');
          })

          tab.classList.add('active');
          target.classList.add('active');
        })
    })
})