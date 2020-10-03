function Course(id: number, program: string) {
    this.id = id;
    this.program = program;
}
Course.prototype.title = 'Intro to Cloud Computing';

const crs = new Course(519, 'CS');
console.log(`Course's Id: ${crs.id}`);
console.log(`Course's program: ${crs.program}`);
console.log(`Course's title: ${crs.title}`);