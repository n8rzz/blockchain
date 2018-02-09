import app from './App';

const port = process.env.PORT || 3000;

app.listen(port, (err: any): void => {
    if (err) {
        throw err;
    }

    console.log(`server is listening on ${port}`);
});
