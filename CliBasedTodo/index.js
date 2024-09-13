const fs = require('fs');
const { Command } = require('commander');
program = new Command();
var todo = [];

try {
    const ans = fs.readFileSync('res.json', 'utf-8');
    todo = ans ? JSON.parse(ans) : [];
} catch (err) {
    console.error('Error reading or parsing res.json:', err);
}

program.command('add')
    .description('To add todos')
    .argument('<strings>', 'TODO')
    .action((strings) => {
        var newone = {
            Todo: strings
        }
        todo.push(newone);
        fs.writeFileSync('res.json', JSON.stringify(todo, null, 2))
    })
program.command('show')
    .description('To show all the todos')
    .action(() => {
        try {
            const rep = fs.readFileSync('res.json', 'utf-8');
            const items = JSON.parse(rep);
        for (let i = 0; i < items.length; i++){
            console.log(`${i+1}. ${items[i].Todo}`);
        }
        }
        catch (err) {
            console.log('no TODOS for now');
        }
    })

program.command('delete')
    .description('To delete a particular todo')
    .argument('<number>', "number of the todo to be deleted")
    .action((number)=>{
        todo.splice(parseInt(number)-1, 1);
        fs.writeFileSync('res.json', JSON.stringify(todo, null, 2))
        console.log('deleted');
    })

program.command('update')
    .description('To update a particular todo')
    .argument('<number>', "number of the todo to be updated")
    .argument('<strings>' , 'updated todo')
    .action((number,strings) => {
        todo[parseInt(number) - 1].Todo = strings
        fs.writeFileSync('res.json', JSON.stringify(todo, null, 2));
        console.log("Updated")
    })

program.parse(process.argv);