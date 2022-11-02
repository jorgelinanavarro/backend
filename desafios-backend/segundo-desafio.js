const fs = require('fs');

class Contenedor {
    constructor(producto) {
        this.producto = producto;
    }

    writeFile = async data => {
        try {
            await fs.promises.writeFile(
                this.producto, JSON.stringify(data, null, 2)
            )
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }

    getAll = async () => {
        try {
            const productos = await fs.promises.readFile(this.producto, 'utf-8');
            return JSON.parse(productos);
        } catch (err) {
            if (err.message.includes('no se ha encontrado el archivo')) return [];
            console.log(`error: ${err}`)
        }
    }

    save = async obj => {
        let productos = this.getAll();
        try {
            let newId;
            productos.length === 0 ? newId = 1 : newId = productos[productos.length - 1].id + 1;
            let newObj = { ...obj, id: newId };
            productos.push(newObj);
            await this.writeFile(productos);
            return newObj.id;
        } catch (err) {
            console.log(`error: ${err}`)
        }
    }

    getById = async id => {
        let productos = await this.getAll();
        try {
            const obj = productos.find(id => productos.id === id);
            return obj ? obj : null;
        } catch (err) {
            console.log(`error: ${err}`)
        }
    }

    deleteById = async id => {
        let productos = await this.getAll();
        try {
            productos = productos.filter(producto => producto.id != id);
            await this.writeFile(productos);
        } catch (err) {
            console.log(`error: ${err}`)
        }
    }

    deleteAll = async () => {
        this.writeFile([])
    }
}

const productos = new Contenedor('productos.txt');

const contenedor = async () => {
    let save = await productos.save({
        title: 'celular',
        precio: 160000,
        thumbnail: 'https: data:image/jpeg;base64,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'
    });
    let getAll = await productos.getAll();
    let getById = await productos.getById(4);
    let deleteById = await productos.deleteById(2);
    let deleteAll = await productos.deleteAll();

    console.log(save);
    console.log(getAll);
    console.log(getById);
    console.log(deleteById);
    console.log(deleteAll);
}

 contenedor();