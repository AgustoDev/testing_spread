import prisma from './prisma';

class CrudOperations {
  constructor(private model: 'todo' | 'user') {}

  async create(data: any) {
    return await prisma[this.model].create({ data });
  }

  async findMany() {
    return await prisma[this.model].findMany();
  }

  async findOne(id: number) {
    return await prisma[this.model].findUnique({ where: { id } });
  }

  async update(id: number, data: any) {
    return await prisma[this.model].update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma[this.model].delete({ where: { id } });
  }
}

export default CrudOperations;
