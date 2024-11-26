const allLiItems = document.querySelectorAll('.sidebar-list li');


allLiItems.forEach((item, index) => {
    if(item.classList.contains('has-children')) {
        let newSubItem = document.createElement('ul');
        let expandIcon = document.createElement('span');
        let subLiItem = document.createElement('li');
        let putExpandIcon = document.createTextNode('icon');

        item.style.position = 'relative';
        expandIcon.style.cssText = `
            display: block; 
            position: absolute;
            top: 0;
            right: 0;
        `;
        newSubItem.classList.add('sub-menu'); // Adicionando a classe 'sub-menu' no UL criado.
        newSubItem.style.visibility = 'hidden';
        newSubItem.style.height = '0';
        expandIcon.classList.add('icon-plus');

        console.log(item);
        newSubItem.appendChild(subLiItem);
        item.appendChild(newSubItem);

        expandIcon.appendChild(putExpandIcon);
        item.appendChild(expandIcon);

        expandIcon.addEventListener('click', () => {
            newSubItem.classList.toggle('show');

            if(newSubItem.classList.contains('show')) {
                newSubItem.style.cssText = `
                    visibility: visible;
                    min-width: 200px;
                    height: auto;
                    min-height: 200px;
                    position: absolute;
                    top: 0;
                    right: -220px;
                    background: red;
                `;
            } else {
                newSubItem.style.cssText = ` 
                    visibility: hidden;
                    height: 0;
                `;
            }
        });

        
    }
})