const bd = require('./bd/bd_utils.js');

function listar() {
  return bd.queryAll('select * from perguntas', []);
}

function buscar_por_palavra_chave(termo) {
  return bd.queryAll(
    'select * from perguntas where texto like ?',
    [`%${termo}%`]
  );
}

function buscar_por_id(id_pergunta) {
  return bd.query(
    'select * from perguntas where id_pergunta = ?',
    [id_pergunta]
  );
}

function cadastrar(texto, id_usuario = 1) {
  const params = [texto, id_usuario];

  return bd.exec(
    'INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?) RETURNING id_pergunta',
    params
  );
}

exports.listar = listar;
exports.buscar_por_palavra_chave = buscar_por_palavra_chave;
exports.buscar_por_id = buscar_por_id;
exports.cadastrar = cadastrar;
