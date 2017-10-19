export class Note {
    text: string;
    created_at: Date;

    constructor(text, created_at) {
        this.text = text;
        this.created_at = created_at;
    }
}