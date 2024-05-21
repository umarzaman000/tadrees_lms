const {DB_USER, DB_PASSWORD} = process.env
export const ConnectionSrt = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.hinndlm.mongodb.net/tadrees?retryWrites=true&w=majority&appName=Cluster0`


