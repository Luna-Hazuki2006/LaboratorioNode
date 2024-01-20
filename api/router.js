/**
 * @swagger
 * components: 
 *      schemas:
 *          Autor:
 *              type: object
 *              required: 
 *                  - nombre
 *                  - biografía
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada del autor
 *                  nombre: 
 *                      type: string
 *                      description: El nombre del autor
 *                  biografía: 
 *                      type: string
 *                      description: La biografía del autor
 *                  foto: 
 *                      type: string
 *                      description: La url de la foto del autor
 *          Categoria:
 *              type: object
 *              required: 
 *                  - nombre
 *                  - descripcion
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada del autor
 *                  nombre: 
 *                      type: string
 *                      description: El nombre de la categoría
 *                  descripcion: 
 *                      type: string
 *                      description: La descripción de la categoría
 *          Conversacion: 
 *              type: object
 *              required: 
 *                  - fecha
 *                  - usuarioCedula
 *                  - publicacionId
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada de la conversación
 *                  fecha: 
 *                      type: date
 *                      description: La fecha en que se creó la conversación
 *                  usuarioCedula: 
 *                      type: string
 *                      description: La cédula del creador del la conversación
 *                  publicacionId: 
 *                      type: integer
 *                      description: La id de la publicación de la conversación
 *          Libro:
 *              type: object
 *              required: 
 *                  - nombre
 *                  - categorias
 *                  - autores
 *                  - tipos
 *                  - relaciones
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada del libro
 *                  nombre: 
 *                      type: string
 *                      description: El nombre del libro
 *                  sinopsis: 
 *                      type: string
 *                      description: La sinopsis del libro
 *                  categorias: 
 *                      type: array
 *                      description: Lista de ids de las categorías a la que pertenece el libro
 *                  autores: 
 *                      type: array
 *                      description: Lista de ids de los autores relacionados con el libro
 *                  tipos: 
 *                      type: array
 *                      description: Lista de ids de los tipos de libro que tiene
 *                  relaciones: 
 *                      type: array
 *                      description: Lista de ids de las relaciones que tiene el libro
 *          LibroCategoria: 
 *          LibrosAutor: 
 *          LibrosRelacion: 
 *          LibrosTipo: 
 *          Mensaje: 
 *              type: object
 *              required: 
 *                  - fecha
 *                  - texto
 *                  - usuarioCedula
 *                  - conversacionId
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada del mensaje
 *                  fecha: 
 *                      type: date
 *                      description: La fecha en que se envió el mensaje
 *                  texto: 
 *                      type: string
 *                      description: El texto que se envió en el mensaje
 *                  usuarioCedula: 
 *                      type: string
 *                      description: La cédula del creador del mensaje
 *                  conversacionId: 
 *                      type: integer
 *                      description: La id de la conversación del mensaje
 *          Publicacion: 
 *              type: object
 *              required: 
 *                  - descripcion
 *                  - cedulaUsuario
 *                  - idLibro
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada de la publicación
 *                  descripcion: 
 *                      type: string
 *                      description: La descripción de la publicación
 *                  usuarioCedula: 
 *                      type: string
 *                      description: La cédula del creador de la publicación
 *                  idLibro: 
 *                      type: integer
 *                      description: La id del libro de la publicación
 *          Relacion: 
 *              type: object
 *              required: 
 *                  - nombre
 *                  - idTiposRelaciones
 *                  - idAutor
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada de la relación
 *                  nombre: 
 *                      type: string
 *                      description: El nombre de la relación
 *                  descripcion: 
 *                      type: string
 *                      description: La descripción de la relación
 *                  idTiposRelaciones: 
 *                      type: integer
 *                      description: La id de su tipo de relación
 *                  idAutor: 
 *                      type: integer
 *                      description: La id del autor de la relación
 *          Sesion: 
 *              type: object
 *              required: 
 *                  - contraseña
 *                  - usuarioCedula
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada de la sesión
 *                  contraseña: 
 *                      type: string
 *                      description: La contraseña del usuario
 *                  usuarioCedula: 
 *                      type: string
 *                      description: La cédula del usuario
 *          TipoLibro: 
 *              type: object
 *              required: 
 *                  - nombre
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada del tipo de libro
 *                  nombre: 
 *                      type: string
 *                      description: El nombre del tipo de libro
 *                  descripcion: 
 *                      type: string
 *                      description: La descripción del tipo de libro
 *          TiposRelaciones: 
 *              type: object
 *              required: 
 *                  - nombre
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada del tipo de relación
 *                  nombre: 
 *                      type: string
 *                      description: El nombre del tipo de relación
 *                  descripcion: 
 *                      type: string
 *                      description: La descripción del tipo de relación
 *          TipoUsuario: 
 *              type: object
 *              required: 
 *                  - nombre
 *                  - estatus
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: La id autogenerada del tipo de relación
 *                  nombre: 
 *                      type: string
 *                      description: El nombre del tipo de relación
 *                  descripcion: 
 *                      type: string
 *                      description: La descripción del tipo de relación
 *                  estatus: 
 *                      type: char
 *                      description: La descripción del tipo de relación
 *          Usuario: 
 *              type: object
 *              required: 
 *                  - cedula
 *                  - nombre
 *                  - apellido
 *                  - fechaNacimiento
 *                  - direccion
 *                  - correo
 *                  - contraseña
 *              properties: 
 *                  cedula: 
 *                      type: string
 *                      description: La cédula del usuario
 *                  nombre: 
 *                      type: string
 *                      description: El nombre del usuario
 *                  apellido: 
 *                      type: string
 *                      description: El apellido del usuario
 *                  fechaNacimiento: 
 *                      type: date
 *                      description: La fecha de nacimiento del usuario
 *                  direccion: 
 *                      type: string
 *                      description: La dirección del usuario
 *                  correo: 
 *                      type: string
 *                      description: El correo del usuario
 *                  contraseña: 
 *                      type: string
 *                      description: La contraseña del usuario
 */

/**
 * @swagger
 * tags:
 *      - name: Autor
 *        description: Manejo de autores
 *      - name: Categoria
 *        description: Manejo de categorias
 *      - name: Conversacion
 *        description: Manejo de conversaciones
 *      - name: Libro
 *        description: Manejo de libros
 *      - name: LibroCategoria
 *        description: Manejo de relaciones entre libros y categorías
 *      - name: LibrosAutores
 *        description: Manejo de relaciones entre libros y autores
 *      - name: LibrosRelacion
 *        description: Manejo de relaciones entre libros y sus relacionados
 *      - name: LibrosTipo
 *        description: Manejo de relaciones entre libros y tipos
 *      - name: Mensaje
 *        description: Manejo de mensajes
 *      - name: Publicacion
 *        description: Manejo de publicaciones
 *      - name: Relacion
 *        description: Manejo de relaciones
 *      - name: Sesion
 *        description: Manejo de sesiones
 *      - name: TipoLibro
 *        description: Manejo de tipos de libros
 *      - name: TiposRelaciones
 *        description: Manejo de tipos de relaciones
 *      - name: TipoUsuario
 *        description: Manejo de tipos de usuarios
 *      - name: Usuario
 *        description: Manejo de usuarios
 * /Autor:
 *      get:
 *          summary: Listar todos los autores
 *          tags: [Autor]
 *          responses: 
 *              '200':
 *                  description: Una lista de todos los autores
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Autor'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      post: 
 *          summary: Crear un autor
 *          tags: [Autor]
 *          requestBody: 
 *              description: Creación de un nuevo autor 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Autor'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Autor'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Autor/{id}: 
 *      get:
 *          summary: Consultar un autor
 *          tags: [Autor]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del autor a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: El autor consultado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Autor'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      put:
 *          summary: Modificar un autor
 *          tags: [Autor]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del autor a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          requestBody: 
 *              description: Modificación de un nuevo autor 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Autor'
 *          responses: 
 *              '200':
 *                  description: "Se modificó con éxito :D"
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Autor'
 *              '400':
 *                  description: Hubo un problema al modificar
 *      delete:
 *          summary: Eliminar un autor
 *          tags: [Autor]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del autor a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Se eliminó con éxito el autor"
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Categoria:
 *      get:
 *          summary: Listar todas las categorias
 *          tags: [Categoria]
 *          responses: 
 *              '200':
 *                  description: Una lista de todas las categorías
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Categoria'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      post: 
 *          summary: Crear una categoría
 *          tags: [Categoria]
 *          requestBody: 
 *              description: Creación de una nueva categoría 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Categoria'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Categoria'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Categoria/{id}: 
 *      get:
 *          summary: Consultar una categoría
 *          tags: [Categoria]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la categoría a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: La categoría consultada
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Categoria'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      put:
 *          summary: Modificar una categoría
 *          tags: [Categoria]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la categoría a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          requestBody: 
 *              description: Modificación de una nueva categoría 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Categoria'
 *          responses: 
 *              '200':
 *                  description: "Se modificó con éxito :D"
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Categoria'
 *              '400':
 *                  description: Hubo un problema al modificar
 *      delete:
 *          summary: Eliminar una categoría
 *          tags: [Categoria]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la categoría a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Se eliminó con éxito la categoría"
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Conversacion:
 *      post: 
 *          summary: Crear una conversación
 *          tags: [Conversacion]
 *          requestBody: 
 *              description: Creación de una nueva conversación 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Conversacion'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Conversacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Conversacion/{id}: 
 *      get:
 *          summary: Consultar una conversación
 *          tags: [Conversacion]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la conversación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: La conversación consultada
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Conversacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Conversacion/Usuario/{usuarioCedula}:
 *      get:
 *          summary: Listar todas las conversaciones por usuario
 *          tags: [Conversacion]
 *          parameters: 
 *              - name: usuarioCedula 
 *                in: path 
 *                description: la cédula del usuario
 *                required: true 
 *                schema:
 *                  type: string
 *                  format: string
 *          responses: 
 *              '200':
 *                  description: Una lista de todas las conversaciones de un usuario
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Conversacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Conversacion/Publicacion/{publicacionId}:
 *      get:
 *          summary: Listar todas las convesaciones por publicación
 *          tags: [Conversacion]
 *          parameters: 
 *              - name: publicacionId 
 *                in: path 
 *                description: la id de la publicación
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Una lista de todas las convesaciones de una publicación
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Conversacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Libro:
 *      get:
 *          summary: Listar todos los libros
 *          tags: [Libro]
 *          responses: 
 *              '200':
 *                  description: Una lista de todos los libros
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Libro'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      post: 
 *          summary: Crear un libro
 *          tags: [Libro]
 *          requestBody: 
 *              description: Creación de un nuevo libro 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Libro'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Libro'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Libro/{id}: 
 *      get:
 *          summary: Consultar un libro
 *          tags: [Libro]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del libro a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: El libro consultado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Libro'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      put:
 *          summary: Modificar un libro
 *          tags: [Libro]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del libro a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          requestBody: 
 *              description: Modificación de un nuevo libro 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Libro'
 *          responses: 
 *              '200':
 *                  description: "Se modificó con éxito :D"
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Libro'
 *              '400':
 *                  description: Hubo un problema al modificar
 *      delete:
 *          summary: Eliminar un libro
 *          tags: [Libro]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del libro a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Se eliminó con éxito el libro"
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Mensaje:
 *      post: 
 *          summary: Crear un mensaje
 *          tags: [Mensaje]
 *          requestBody: 
 *              description: Creación de un nuevo mensaje 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Mensaje'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Mensaje'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Mensaje/{conversacionId}/{id}: 
 *      get:
 *          summary: Consultar un mensaje
 *          tags: [Mensaje]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del mensaje a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *              - name: conversacionId 
 *                in: path 
 *                description: id de la conversación
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: El mensaje consultado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Mensaje'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Mensaje/Conversacion/{conversacionId}:
 *      get:
 *          summary: Listar todos los mensajes por conversacion
 *          tags: [Mensaje]
 *          parameters: 
 *              - name: conversacionId 
 *                in: path 
 *                description: la id de la convesación
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Una lista de todos los mensajes de una conversación
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Mensaje'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Mensaje/Usuario/{conversacionId}/{usuarioCedula}:
 *      get:
 *          summary: Listar todos los mensajes de una conversación por usuario
 *          tags: [Mensaje]
 *          parameters: 
 *              - name: conversacionId 
 *                in: path 
 *                description: la id de la conversación
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *              - name: usuarioCedula 
 *                in: path 
 *                description: la cédula del usuario
 *                required: true 
 *                schema:
 *                  type: string
 *                  format: string
 *          responses: 
 *              '200':
 *                  description: Una lista de todos los mensajes de una conversación de un usuario
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Mensaje'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Publicacion:
 *      get:
 *          summary: Listar todas las publicaciones
 *          tags: [Publicacion]
 *          responses: 
 *              '200':
 *                  description: Una lista de todas las publicaciones
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Publicacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      post: 
 *          summary: Crear una publicación
 *          tags: [Publicacion]
 *          requestBody: 
 *              description: Creación de una nueva publicación 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Publicacion'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Publicacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Publicacion/{id}: 
 *      get:
 *          summary: Consultar una publicación
 *          tags: [Publicacion]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la publicación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: La publicación consultada
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Publicacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      put:
 *          summary: Modificar una publicación
 *          tags: [Publicacion]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la publicación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          requestBody: 
 *              description: Modificación de una nueva publicación 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Publicacion'
 *          responses: 
 *              '200':
 *                  description: "Se modificó con éxito :D"
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Publicacion'
 *              '400':
 *                  description: Hubo un problema al modificar
 *      delete:
 *          summary: Eliminar una publicación
 *          tags: [Publicacion]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la publicación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Se eliminó con éxito la publicación"
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Relacion:
 *      get:
 *          summary: Listar todas las relaciones
 *          tags: [Relacion]
 *          responses: 
 *              '200':
 *                  description: Una lista de todas las relaciones
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Relacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      post: 
 *          summary: Crear una relación
 *          tags: [Relacion]
 *          requestBody: 
 *              description: Creación de una nueva relación 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Relacion'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Relacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Relacion/{id}: 
 *      get:
 *          summary: Consultar una relacion
 *          tags: [Relacion]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la relación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: La relación consultada
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Relacion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      put:
 *          summary: Modificar una relación
 *          tags: [Relacion]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la relación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          requestBody: 
 *              description: Modificación de una nueva relación 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Relacion'
 *          responses: 
 *              '200':
 *                  description: "Se modificó con éxito :D"
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Relacion'
 *              '400':
 *                  description: Hubo un problema al modificar
 *      delete:
 *          summary: Eliminar una relación
 *          tags: [Relacion]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la relación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Se eliminó con éxito la relación"
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Sesion:
 *      post: 
 *          summary: Iniciar una sesión
 *          tags: [Sesion]
 *          requestBody: 
 *              description: Inicio de sesión
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Sesion'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Sesion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Sesion/{id}: 
 *      get:
 *          summary: Consultar una sesión
 *          tags: [Sesion]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la sesión a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: La relación consultada
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Sesion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      delete:
 *          summary: Eliminar una sesión
 *          tags: [Sesion]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id de la sesión a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Se eliminó con éxito la sesión"
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Sesion/cedula/{cedulaUsuario}: 
 *      get:
 *          summary: Listar todas las sesiones de un usuario
 *          tags: [Sesion]
 *          parameters: 
 *              - name: cedulaUsuario 
 *                in: path 
 *                description: Cédula de usuario
 *                required: true 
 *                schema:
 *                  type: string
 *                  format: string
 *          responses: 
 *              '200':
 *                  description: Una lista de todas las sesiones de un usuarios
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Sesion'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /TipoLibro:
 *      get:
 *          summary: Listar todos los tipos de libros
 *          tags: [TipoLibro]
 *          responses: 
 *              '200':
 *                  description: Una lista de todos los tipos de libros
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/TipoLibro'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      post: 
 *          summary: Crear un tipo de libro
 *          tags: [TipoLibro]
 *          requestBody: 
 *              description: Creación de un nuevo tipo de libro 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/TipoLibro'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/TipoLibro'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /TipoLibro/{id}: 
 *      get:
 *          summary: Consultar un tipo de libro
 *          tags: [TipoLibro]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del tipo de libro a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: El tipo de libro consultado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/TipoLibro'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      put:
 *          summary: Modificar un tipo de libro
 *          tags: [TipoLibro]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del tipo de libro a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          requestBody: 
 *              description: Modificación de un tipo de libro 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/TipoLibro'
 *          responses: 
 *              '200':
 *                  description: "Se modificó con éxito :D"
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/TipoLibro'
 *              '400':
 *                  description: Hubo un problema al modificar
 *      delete:
 *          summary: Eliminar un tipo de libro
 *          tags: [TipoLibro]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del tipo de libro a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Se eliminó con éxito el tipo de libro"
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /TiposRelaciones:
 *      get:
 *          summary: Listar todos los tipos de relaciones
 *          tags: [TiposRelaciones]
 *          responses: 
 *              '200':
 *                  description: Una lista de todos los tipos de relaciones
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/TiposRelaciones'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      post: 
 *          summary: Crear un tipo de relación
 *          tags: [TiposRelaciones]
 *          requestBody: 
 *              description: Creación de un nuevo tipo de relación 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/TiposRelaciones'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/TiposRelaciones'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /TiposRelaciones/{id}: 
 *      get:
 *          summary: Consultar un tipo de relación
 *          tags: [TiposRelaciones]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del tipo de relación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: El tipo de relación consultado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/TiposRelaciones'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      put:
 *          summary: Modificar un tipo de relación
 *          tags: [TiposRelaciones]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del tipo de relación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          requestBody: 
 *              description: Modificación de un tipo de relación 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/TiposRelaciones'
 *          responses: 
 *              '200':
 *                  description: "Se modificó con éxito :D"
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/TiposRelaciones'
 *              '400':
 *                  description: Hubo un problema al modificar
 *      delete:
 *          summary: Eliminar un tipo de relación
 *          tags: [TiposRelaciones]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del tipo de relación a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Se eliminó con éxito el tipo de relación"
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /TipoUsuario:
 *      get:
 *          summary: Listar todos los tipos de usuarios
 *          tags: [TipoUsuario]
 *          responses: 
 *              '200':
 *                  description: Una lista de todos los tipos de usuarios
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/TipoUsuario'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      post: 
 *          summary: Crear un tipo de usuario
 *          tags: [TipoUsuario]
 *          requestBody: 
 *              description: Creación de un nuevo tipo de usuario 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/TipoUsuario'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/TipoUsuario'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /TipoUsuario/{id}: 
 *      get:
 *          summary: Consultar un tipo de usuario
 *          tags: [TipoUsuario]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del tipo de usuario a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: El tipo de usuario consultado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/TipoUsuario'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      put:
 *          summary: Modificar un tipo de usuario
 *          tags: [TipoUsuario]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del tipo de usuario a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          requestBody: 
 *              description: Modificación de un tipo de usuario 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/TipoUsuario'
 *          responses: 
 *              '200':
 *                  description: "Se modificó con éxito :D"
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/TipoUsuario'
 *              '400':
 *                  description: Hubo un problema al modificar
 *      delete:
 *          summary: Eliminar un tipo de usuario
 *          tags: [TipoUsuario]
 *          parameters: 
 *              - name: id 
 *                in: path 
 *                description: id del tipo de usuario a retornar
 *                required: true 
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses: 
 *              '200':
 *                  description: Se eliminó con éxito el tipo de usuario"
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Usuario:
 *      get:
 *          summary: Listar todos los usuarios
 *          tags: [Usuario]
 *          responses: 
 *              '200':
 *                  description: Una lista de todos los usuarios
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: array
 *                              items: 
 *                                  $ref: '/components/schemas/Usuario'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      post: 
 *          summary: Crear un usuario
 *          tags: [Usuario]
 *          requestBody: 
 *              description: Creación de un nuevo usuario 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Usuario'
 *          responses: 
 *              '200':
 *                  description: El objeto creado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Usuario'
 *              '400':
 *                  description: no hay datos u otro mensaje
 * /Usuario/{cedula}: 
 *      get:
 *          summary: Consultar un usuario
 *          tags: [Usuario]
 *          parameters: 
 *              - name: cedula 
 *                in: path 
 *                description: la cédula del usuario a retornar
 *                required: true 
 *                schema:
 *                  type: string
 *                  format: string
 *          responses: 
 *              '200':
 *                  description: El usuario consultado
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Usuario'
 *              '400':
 *                  description: no hay datos u otro mensaje
 *      put:
 *          summary: Modificar un usuario
 *          tags: [Usuario]
 *          parameters: 
 *              - name: cedula 
 *                in: path 
 *                description: La cédula de usuario a retornar
 *                required: true 
 *                schema:
 *                  type: string
 *                  format: string
 *          requestBody: 
 *              description: Modificación de un usuario 
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/components/schemas/Usuario'
 *          responses: 
 *              '200':
 *                  description: "Se modificó con éxito :D"
 *                  content:
 *                      application/json: 
 *                          schema: 
 *                              type: object
 *                              items: 
 *                                  $ref: '/components/schemas/Usuario'
 *              '400':
 *                  description: Hubo un problema al modificar
 */

import AutorRouter from './components/Autor/Router.js'
import PublicacionRouter from './components/Publicacion/Router.js'
import SesionRouter from './components/Sesion/Router.js'
import MensajeRouter from "./components/Mensaje/Router.js";
import ConversacionRouter from "./components/Conversacion/Router.js";
import UsuarioRouter from './components/Usuario/Router.js'
import TiposRelacionesRouter from "./components/TiposRelaciones/Router.js";
import TipoUsuarioRouter from "./components/TipoUsuario/Router.js";
import CategoriaRouter from './components/Categoria/Router.js'
import TipoLibroRouter from "./components/TipoLibro/Router.js";
import LibroRouter from "./components/Libro/Router.js";
import LibrosRelacionRouter from "./components/LibrosRelacion/Router.js";
import LibroCategoriaRouter from "./components/LibroCategoria/Router.js";
import LibrosAutorRouter from "./components/LibrosAutor/Router.js";
import RelacionesRouter from "./components/Relacion/Router.js";
import LibrosTiposRouter from "./components/LibrosTipo/Router.js";

const router = (app) => {
    AutorRouter(app)
    SesionRouter(app)
    MensajeRouter(app)
    ConversacionRouter(app)
    PublicacionRouter(app)
    UsuarioRouter(app)
    TiposRelacionesRouter(app)
    TipoLibroRouter(app)
    TipoUsuarioRouter(app)
    CategoriaRouter(app)
    LibroRouter(app)
    LibrosRelacionRouter(app)
    LibroCategoriaRouter(app)
    LibrosAutorRouter(app)
    RelacionesRouter(app)
    LibrosTiposRouter(app)
}

export {router}