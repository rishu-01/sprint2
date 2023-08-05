class ItemsController {
    constructor(currentId=0){
        this.items = [];
        this.currentId = currentId;
    }
        addItem(name1, description, img, createdAt) {
            this.currentId++;
            const newItem = {
                id: this.currentId,
                name1: name1,
                description: description,
                img: img,
                createdAt: createdAt
            };
            // push the item into the items property
            this.items.push(newItem);
        }
        loadItemsFromLocalStorage() {
            const storageItems = localStorage.getItem("items")
            if (storageItems) {
                const items = JSON.parse(storageItems)
                for (var i = 0, size = items.length; i < size; i++) {
                    const item = items[i];
                    this.items.push(item);
                }
            }
        }  
}
