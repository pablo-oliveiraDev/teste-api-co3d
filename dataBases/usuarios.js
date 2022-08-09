const firebase = require('../services/firbaseConn');


const db = firebase.firestore();
const Usuario = db.collection('usuarios');

const userPost = post('/user', async (req, res) => {
    const data = req.body;
    await Usuario.add(data);
    try {
        res.status(201).send({ msg: "Usuario cadastrado com sucesso!" });
    } catch (error) {
        res.send({ msg: "Erro ao cadastrar usuario!" })
    }


});module.exports=userPost;

// app.get('/user', async (req, res) => {
//     const snapshot = await Usuario.get();
//     const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     try {
//         res.send(usuarios);
//     } catch (error) {
//         res.send(error);
//     }

// });


// app.get('/user/:id', async (req, res) => {
//     const id = req.params.id;
//     const snapshot = await Usuario.get();
//     const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

//     const usuario = usuarios.filter((u) => {
//         return u.id == id;

//     });
//     res.send(usuario);
// });
// app.put('user/:id', async (req, res) => {
//     const id = req.params.id;
//     await Usuario.doc(id).update(req.body);

//     res.send({ msg: "Usuario atualizado com sucesso!" });
// });

// app.delete('/user/:id', async (req, res) => {
//     const id = req.params.id;
//     await Usuario.doc(id).delete();

//     res.send({ msg: "Usuário delestado com sucesso!" })
// });


// module.exports = Usuario;