function solution(skill, skill_trees) {
    skill_trees.forEach(tree=>{
        const pattern = `\\w*${skill[0]}\\w*${skill[1]}\\w*${skill[2]}\w*`;
        const regex = new RegExp(pattern,'g');
        console.log(tree.split(regex));
    })
}

skill = "CBD";
arr = ["BACDE", "CBADF", "AECB", "BDA"];
solution(skill,arr);
