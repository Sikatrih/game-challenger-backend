import mongoose from "mongoose";

export type IssueDocument = mongoose.Document & {
    title: string;
    authorId: string;
    commentsIds: string[];
};

export const issueSchema = new mongoose.Schema({
    title: String,
    authorId: String,
    commentsIds: Array
});

export const Issue = mongoose.model<IssueDocument>("Issue", issueSchema, );
