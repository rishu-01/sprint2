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
}

const itemsController1 = new ItemsController();

// adding new items
itemsController1.addItem('laptop', 'High-performance laptop with great display', 'https://example.com/laptop.png', '2023-05-08');
itemsController1.addItem('Apple', 'This is fruit', 'https://example.com/laptop.png', '2023-07-28');
itemsController1.addItem('Orange', 'This is color', 'https://example.com/laptop.png', '2023-05-08');
itemsController1.addItem('Mobile', 'High-performance Mobile with great display', 'https://example.com/laptop.png', '2023-05-08');

console.log(itemsController1.items);