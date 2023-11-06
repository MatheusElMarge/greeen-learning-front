import { AbstractEntity } from "./abstract.entity";

export class Aluno extends AbstractEntity {
    nome! : string;
    turma! : string;
}