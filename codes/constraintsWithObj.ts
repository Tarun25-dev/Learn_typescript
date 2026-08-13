function getId<T extends {id: number}>(obj: T): number{
    return obj.id;
};

console.log(getId({id: 3225, name: "tharun"}));

// 3225