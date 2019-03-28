

function nameit(target) {
    console.log('decorating ' + target)
}

@nameit
class Cow {
    constructor(private name: string) { }

    moo() {
        return "Moo - " + this.name;
    }
} 

