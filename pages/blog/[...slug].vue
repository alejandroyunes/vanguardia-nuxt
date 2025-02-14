<script setup lang="ts">
import BlogArticle from '~/components/organisms/blog/article/index.vue'
const linuxWindowsArticle = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377830/blog/vb8hiwp1l43tscwoye3q.webp'
const datasetImg = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377830/blog/m2yyvr6jft0a8j1ws8rj.webp'
const HTML5Img = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/kkc4eb4flw5qgmjpmdro.webp'
const dialogHtmlImg = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/y8ilxs7nfswjoshlij4z.webp'
const typeFile = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/vhgqvp2jx4bt90tcrrof.webp'
const webDev = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/o8uhw4gqb4wdjj6nrnef.webp'
const NodeExpressServer = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698957906/blog/mcygclsb4g0jj5jrchuj.webp'
const NodeExpressServerPackage = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698969420/blog/articles/express-apollo-server/yfhq2ar29havuwrqkkvm.webp"
const NodeExpressServerNodemon = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698969281/blog/articles/express-apollo-server/cb6ipencimfoidlji9st.webp"
const NodeExpressServerTsConfig = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698982069/blog/articles/express-apollo-server/cnya3ezkbt2nig1chalj.webp"
const NodeExpressServerIndex = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698969281/blog/articles/express-apollo-server/uetfdarc7lpqdbqfxvjb.webp"
const NodeExpressServerGraphQL = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698982347/blog/articles/express-apollo-server/bnyl6josz6cm2llcxeah.webp"
const NodeExpressServerGraphQLResolver = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698983929/blog/articles/express-apollo-server/qdgulxunkh6sck7q7857.webp"
const NodeExpressServerGraphQLServices = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698984511/blog/articles/express-apollo-server/kxyolrs7qkmgnwa7ey3r.webp"
const NodeExpressServerGraphQLExtract = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698986621/blog/articles/express-apollo-server/fjnyzh4gedjsn0kwx4wi.webp"
const NodeExpressServerGraphQLTypeDefs = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698988912/blog/articles/express-apollo-server/xdrmg8oq3grvkszwdjt4.webp"
const NodeExpressServerPrisma = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698990416/blog/articles/express-apollo-server/bchrvctdzhaf6iye6l8c.webp"
const NextStyleX = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702595741/blog/tfco6gqkkqrvwer8xhns.webp"
const NextStyleXDependencies = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702598521/blog/articles/next-app-style-x/a6d9i37uatdhabgmjxkx.webp"
const NextStyleXBabel = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702599012/blog/articles/next-app-style-x/ikeujy9dxxqepiscn9jg.webp"
const NextStyleXTsConfig = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702599163/blog/articles/next-app-style-x/vj5nd8ewqsfvp94n9cjy.webp"
const NextStyleXEslint = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702599324/blog/articles/next-app-style-x/jpp9emuygb4zv6xv52ah.webp"
const NextStyleXNextConfig = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702599513/blog/articles/next-app-style-x/cxy3zobcgsgxmp6iue3l.webp"

const route = useRoute()
const { slug } = route.params

const blogData = {
  blog: [
    {
      id: 1,
      title: "Next 14 app con Style X",
      meta: "Una guía paso a paso para configurar la aplicación Next 14 con Style X. En el mundo siempre cambiante de la tecnología, mantenerse al día significa adoptar las últimas innovaciones.",
      image: NextStyleX,
      slug: "next-14-app-con-style-x/1",
      alt: "Next 14 app con Style X",
      articleSummary: "Una de esas innovaciones es Next 14, un framework poderoso que promete transformar tu aplicación web. Instalaremos también Style X para nuestros estilos. En esta guía, te guiaremos a través del proceso de instalación de la Next App y Style X.",
      readTime: "10",
      tags: ["React"],
      sharedOn: ["Twitter", "LinkedIn"],
      publishDate: "14 de diciembre de 2023",
      steps: [
        {
          title: "Configuración del entorno: Configuración inicial",
          step: "Primeros pasos:",
          description: " Asegúrate de tener Node y un administrador de paquetes como npm, pnpm o yarn instalados en tu sistema. Una vez confirmado, ejecuta el comando 'npm init -y' en el directorio elegido desde la terminal. Esto establecerá una configuración básica del proyecto. En el siguiente paso, nos centraremos en instalar las dependencias necesarias para nuestra aplicación.",
          resource: "https://nodejs.org/en",
        },
        {
          title: "Instalación de dependencias",
          description: "Primero y ante todo, tienes el enlace al repositorio de GitHub con todo el código en el enlace a continuación. En este paso, instalaremos las dependencias necesarias para nuestro servidor. Comenzaremos instalando tanto dependencias regulares como de desarrollo.",
          resource: "https://github.com/alejandroyunes/stylex-next-app",
          list: [
            "Next 14",
            "Style X",
            "Babel",
            "Typescript",
            "Eslint"
          ],
          img: NextStyleXDependencies,
          imgAlt: "Next 14 app con Style X",
          imgHeight: "282",
          imgWidth: "500"
        },
        {
          title: "Configuración de Babel",
          description: "Babel es un compilador de JavaScript popular que permite a los desarrolladores escribir código en la última versión de ECMAScript (el nombre oficial de la especificación del lenguaje JavaScript) y luego transformarlo o transpilarlo a una versión anterior de JavaScript compatible con la mayoría de los navegadores y entornos:",
          img: NextStyleXBabel,
          imgAlt: "Configuración de Babel para la próxima aplicación y Style X",
          imgHeight: "785",
          imgWidth: "482"
        },
        {
          title: "Agregar tsconfig.json",
          description: "Esta configuración define opciones del compilador para un proyecto TypeScript, incluyendo detalles como la versión de destino, el soporte para decoradores experimentales, el sistema de módulos y otras configuraciones relacionadas con la comprobación estricta de tipos. También establece las rutas de inclusión de archivos y directorios para el compilador TypeScript. Me gusta establecer el src/app porque estará bajo la carpeta de node_modules.",
          img: NextStyleXTsConfig,
          imgAlt: "Configuración de tsconfig",
          imgHeight: "400",
          imgWidth: "500"
        },
        {
          title: "Agregar eslintrc.js",
          description: "ESLint es una herramienta ampliamente utilizada y de código abierto para el análisis estático de código en JavaScript. Ayuda a los desarrolladores a identificar y corregir problemas en su código mediante la aplicación de un conjunto de normas o reglas de codificación.",
          img: NextStyleXEslint,
          imgAlt: "Configuración de Eslint",
          imgHeight: "221",
          imgWidth: "500"
        },
        {
          title: "Agregar next.config.js",
          description: "next.config.js es un archivo de configuración utilizado en Next.js. Este archivo nos permite personalizar varios aspectos del proceso de construcción y del comportamiento en tiempo de ejecución de Next.js.",
          img: NextStyleXNextConfig,
          imgAlt: "Configuración de next config",
          imgHeight: "242",
          imgWidth: "500"
        },
        {
          title: "Crear page.tsx y el diseño",
          description: "Esta sección es bastante extensa, así que puedes copiar la página, el diseño y globalTokens.stylex.ts para completar la instalación de una aplicación Next limpia con Style X desde el repositorio de GitHub.",
        },
        {
          description: "Si has llegado hasta aquí, te agradezco tu atención. Espero que esta plantilla te sea útil."
        }
      ]
    },
    {
      id: 2,
      title: "Arquitectura de servidor moderno y de alto rendimiento",
      meta: "Este servidor está construido utilizando Node.js y Express.  Utilizando GraphQL con Apollo Server como el servidor GraphQL. Los datos se almacenan en una base de datos PostgreSQL y se acceden a través de Prisma.",
      image: NodeExpressServer,
      slug: "arquitectura-de-servidor-moderno-y-de-alto-rendimiento/2",
      alt: "Diagrama de Arquitectura del Servidor con Node.js, Express, TypeScript, GraphQL, Apollo Server, PostgreSQL y Prisma",
      articleSummary: "Este servidor será construido utilizando Node.js y Express para manejar las solicitudes HTTP. Utiliza TypeScript para agregar tipado estático a todo el código. La API se implementa utilizando GraphQL con Apollo Server como el servidor GraphQL. Los datos se almacenan en una base de datos PostgreSQL y se acceden a través de Prisma, un ORM (Object-Relational Mapping) para Node.js.",
      readTime: "15",
      tags: ["Node", 'JavaScript'],
      sharedOn: ["Twitter", "LinkedIn"],
      publishDate: "Noviembre 02, 2023",
      steps: [
        {
          title: "Preparando el Entorno: Instalación de Node y Configuración Inicial",
          description: " es esencial asegurarse de tener Node y un gestor de paquetes como npm, pnpm o yarn instalados en tu sistema. Una vez confirmada su instalación, puedes ejecutar el comando 'npm init -y' en la carpeta de tu elección desde la terminal. Esto establecerá una configuración básica para tu proyecto. En el siguiente paso, nos enfocaremos en la instalación de las dependencias necesarias para nuestro servidor.",
          step: "Para comenzar,",
          resource: "https://nodejs.org/",
        },
        {
          title: "Instalación de Dependencias",
          description: "Antes que nada tienes el link al repo de github con todo el código en el link inferior. En este paso, instalaremos las dependencias necesarias para nuestro servidor. Comenzaremos instalando las dependencias y dependencias de desarrollo.",
          resource: "https://github.com/alejandroyunes/express-apollo-postgres-prisma",
          list: [
            "npm i @apollo/server @apollo/client cors dotenv express graphql",
            "npm i -D @types/cors @types/express @types/node nodemon prisma ts-node typescript",
            "Asegúrate de crear los scripts de npm para ejecutar el servidor y el cliente."
          ],
          img: NodeExpressServerPackage,
          imgAlt: "Paquetes de Node.js para el servidor",
          imgHeight: "400",
          imgWidth: "500"
        },
        {
          title: "Configuración de Nodemon",
          description: "Nodemon es una herramienta que nos permite reiniciar automáticamente el servidor cuando se detectan cambios en el código. Para configurarlo, creamos un archivo nodemon.json en la raíz del proyecto y agregamos el siguiente código:",
          img: NodeExpressServerNodemon,
          imgAlt: "Configuración de Nodemon para el servidor",
        },
        {
          title: "Agregar tsconfig.json",
          description: "Esta configuración define las opciones del compilador para un proyecto TypeScript, incluyendo detalles como la versión de destino, el soporte para decoradores experimentales, el sistema de módulos, y otras configuraciones relacionadas con la estricta comprobación de tipos. Además, establece las rutas de inclusión de archivos y directorios para el compilador TypeScript.",
          img: NodeExpressServerTsConfig,
          imgAlt: "Configuración de tsconfig",
        },
        {
          title: "Servidor web utilizando Express.js con GraphQL",
          description: "Este código configura un servidor web Express habilitado para GraphQL en la ruta '/graphql' y proporciona una ruta raíz que responde con un mensaje ' hello world' para rutas HTTP. Al ejecutarse, el servidor se inicia en el puerto 4000 y queda listo para atender solicitudes.",
          img: NodeExpressServerIndex,
          imgAlt: "Configuración de Index en expressjs",
          list: [
            "El código importa bibliotecas como Express, CORS, dotenv y Apollo Server.",
            "Configura un servidor Express en un puerto (4000 o definido por variable de entorno).",
            "Define un servidor GraphQL con tipos y resolvers.",
            "Configura middleware para manejar CORS y solicitudes JSON y URL codificadas.",
            "Inicia el servidor Express y muestra mensajes en la consola con las URL del servidor web y GraphQL cuando está listo."
          ]
        },
        {
          title: "Agregar configuración de GraphQL",
          description: "Este código importa módulos, como el sistema de archivos 'fs' y 'path' de Node, y resuelve tipos GraphQL definidos en archivos. Luego, combina estos tipos en una sola definición 'typeDefs' y configura los resolvers para consultas y mutaciones relacionadas con usuarios y publicaciones.",
          img: NodeExpressServerGraphQL,
          imgAlt: "Configuración de GraphQL",
        },
        {
          title: "Agregar resolvers para consultas y mutaciones",
          description: "Este código define resolvers para consultas y mutaciones relacionadas con usuarios y publicaciones. Los resolvers son funciones que se ejecutan cuando se realiza una consulta o mutación GraphQL. Cada resolver recibe argumentos, realiza una operación y devuelve un resultado.",
          img: NodeExpressServerGraphQLResolver,
          imgAlt: "Configuración de GraphQL resolvers",
        },
        {
          title: "Funciones de resolución y gestión de usuarios en GraphQL con Prisma",
          description: "Este código importa módulos relacionados con Prisma y GraphQL, y define funciones para interactuar con la base de datos y realizar operaciones relacionadas con usuarios. Estas operaciones incluyen obtener usuarios, obtener un usuario por ID y crear un nuevo usuario en la base de datos a través de Prisma. El código también incluye la extracción de selecciones GraphQL para determinar si se deben incluir detalles adicionales, como publicaciones, al obtener usuarios o un usuario específico.",
          img: NodeExpressServerGraphQLServices,
          imgAlt: "Configuración de servicios para GraphQL",
        },
        {
          title: "Gestión de selecciones de campos en consultas GraphQL",
          description: "Este código ofrece funciones para gestionar selecciones de campos en consultas GraphQL. Aprovecha la información de resolución GraphQL para extraer y procesar las selecciones de campos, lo que resulta valioso para determinar qué datos deben recuperarse de la base de datos en función de la consulta GraphQL. Además, en caso de que el campo no exista, proporciona un resultado vacío, mejorando el desempeño del sistema.",
          img: NodeExpressServerGraphQLExtract,
          imgAlt: "Gestión de selecciones de campos en consultas GraphQL",
        },
        {
          title: "Adicionalmente, agregamos los typesDefs para usuario y publicación",
          description: "Esto describe los types y mutations de GraphQL con tres tipos principales: 'User,' 'UserInput,' 'Query,' y 'Mutation.' El tipo 'User tiene campos como 'id,' 'email,' 'username,' y 'posts,' y se utiliza para representar usuarios y sus relaciones con publicaciones. 'UserInput' se utiliza para ingresar información de usuario en mutaciones. 'Query' proporciona operaciones para recuperar usuarios o un usuario específico. 'Mutation' ofrece operaciones para crear, actualizar y eliminar usuarios en la base de datos a través de GraphQL.",
          img: NodeExpressServerGraphQLTypeDefs,
          imgAlt: "Types y mutaciones de GraphQL",
        },
        {
          title: "Esquema Prisma para Usuarios y Publicaciones en PostgreSQL",
          description: "Este fragmento de código define un esquema Prisma que representa modelos de datos para usuarios y publicaciones en una base de datos PostgreSQL. También configura la generación del cliente de Prisma para interactuar con la base de datos.  Agregamos nuestra base de datos en el archivo .env, y luego ejecutamos el comando 'npx prisma generate' para generar el cliente de Prisma.",
          img: NodeExpressServerPrisma,
          imgAlt: "Schema de Prisma para usuarios y publicaciones",
        },
        {
          description: "Si has llegado hasta aquí, te agradezco por tu atención. Espero que esta plantilla te pueda resultar útil."
        }
      ]
    },
    {
      id: 3,
      title: "Guía de Carrera en Desarrollo Web",
      meta: "Descubre habilidades esenciales y perspectivas para una exitosa carrera en desarrollo web en nuestra guía integral.",
      image: webDev,
      slug: "guia-de-carrera-en-desarrollo-web/3",
      alt: "Computadora con alusión al desarrollo web",
      articleSummary: "Te presentamos nuestra Guía de Carrera en Desarrollo Web: un recurso completo diseñado para personas interesadas en embarcarse en una carrera en desarrollo web. Adéntrate en las perspectivas de la industria y descubre las habilidades y herramientas esenciales necesarias para destacar en este campo dinámico.",
      readTime: "10",
      tags: ["JavaScript", "Node"],
      sharedOn: ["Twitter", "LinkedIn"],
      publishDate: "Octubre 9, 2023",
      steps: [
        {
          title: "Diseñador UI/UX",
          description: "Un Diseñador UI/UX crea interfaces digitales amigables para el usuario, enfocándose en mejorar la usabilidad, estética y satisfacción general del usuario en sitios web y aplicaciones. Combina la creatividad con la funcionalidad para crear experiencias agradables e intuitivas. Aquí tienes algunos puntos clave:",
          list: [
            "Principios de Diseño: incluyendo color, contraste, espaciado, tipografía, etc.",
            "Software de Diseño: dominio de herramientas como Figma, Sketch y productos de Adobe.",
            "Creación de Wireframes y Prototipos: planificación del diseño de las pantallas de la aplicación.",
            "Investigación de Usuarios: identificación y validación de las necesidades de los usuarios.",
            "Pruebas de Usuario: evaluación y validación de diseños.",
            "HTML y CSS Básicos: facilitando la colaboración fluida."
          ]
        },
        {
          title: "Desarrollador de Aplicaciones de Página Única (SPA) - Front-end",
          description: "Especializado en el desarrollo de aplicaciones de página única que se cargan una vez desde el servidor y actualizan dinámicamente el contenido sin necesidad de recargar la página.",
          list: [
            "Frameworks de JavaScript: experiencia en React, Angular, Vue, Svelte, etc.",
            "Enrutamiento: implementación de enrutamiento del lado del cliente, vistas y componentes.",
            "Gestión de Estado: utilización de bibliotecas como Redux, Vuex, etc.",
            "Integración de API: habilidades en Rest APIs y GraphQL.",
            "Carga Tardía (Lazy Loading): optimización del rendimiento para activos y componentes.",
            "Seguridad: garantizar la protección contra vulnerabilidades como XSS y CSRF."
          ]
        },
        {
          title: "Desarrollador del Lado del Servidor - Full Stack",
          description: "Especializado en la creación de aplicaciones web que generan contenido en el servidor antes de enviarlo al cliente.",
          list: [
            "Lenguajes y Tecnologías del Lado del Servidor: Node, Python, PHP, C#.",
            "Frameworks del Backend: Express, Django, Laravel, Rails.",
            "Frameworks de SSR (Renderización en el Lado del Servidor): Next.js, Nuxt.js, Remix.",
            "Bases de Datos y ORM (Mapeo Objeto-Relacional): MySQL, Postgres, MongoDB, Prisma.",
            "Motores de Plantillas: Blade, Pug, EJS, Handlebars, Twig.",
            "Autenticación y Autorización: JWT, Sesiones, Cookies, OAuth."
          ]
        },
        {
          title: "Desarrollador de API y Microservicios",
          description: "Un desarrollador backend especializado en el diseño, desarrollo y mantenimiento de microservicios y APIs, con un fuerte énfasis en el manejo de lógica compleja.",
          list: [
            "Lenguajes y Tecnologías del Lado del Servidor: Node, Python, PHP, C#.",
            "Arquitectura de Microservicios: Descubrimiento de servicios, equilibrio de carga, etc.",
            "Diseño de API: API REST, GraphQL.",
            "Contenedorización: Empaquetado para microservicios.",
            "Pasarelas de API: Implementación de pasarelas para enrutamiento.",
            "Autenticación y Autorización: Asegurar las APIs con mecanismos de autenticación.",
            "Escalabilidad: Manejo de cargas de trabajo variables."
          ]
        },
        {
          title: "Ingeniero DevOps",
          description: "Se enfoca en la implementación y operaciones de la aplicación.",
          list: [
            "Proveedores de Nube: AWS, Azure, Google Cloud.",
            "Infraestructura como Código: Terraform, CloudFormation.",
            "Contenedorización: Docker, Kubernetes.",
            "Serverless: AWS Lambda, Azure Functions.",
            "Integración Continua: CircleCI, Github Actions.",
            "Despliegue Continuo: AWS CodeDeploy, Azure DevOps.",
            "Monitoreo, Registro y Alertas: DataDog, Loggly, OpsGenie."
          ]
        },
        {
          title: "Desarrollador Móvil",
          description: "Se enfoca en la implementación de aplicaciones móviles.",
          list: [
            "iOS: Swift y Objective-C.",
            "Android: Kotlin y Java.",
            "Plataformas Cruzadas: Utiliza tecnologías web como React Native y Flutter.",
            "Desarrollo de API: Crea APIs para que tu aplicación móvil interactúe con ellas.",
            "Pruebas Móviles: Realiza pruebas con herramientas como Jest y Appium.",
            "Herramientas de Compilación Nativas: XCode y Android Studio."
          ]
        },
        {
          title: "Especialista en Seguridad Web",
          description: "En este rol, las responsabilidades incluyen garantizar la seguridad y protección de las aplicaciones web, lo que implica abordar y corregir vulnerabilidades.",
          list: [
            "Vulnerabilidades Web: Proteger e identificar la inyección SQL, XSS, CSRF.",
            "Herramientas de Seguridad Web.",
            "Pruebas de Penetración.",
            "Auditorías de Seguridad.",
            "Cumplimiento de Seguridad: Comprender el cumplimiento y las regulaciones."
          ]
        },
        {
          title: "Desarrollador de Juegos Web y Móviles",
          description: "Los Desarrolladores de Juegos Web y Móviles crean juegos cautivadores para plataformas en línea y móviles. Codifican mecánicas de juego, gráficos y optimizan el rendimiento para brindar experiencias de juego agradables en diferentes dispositivos.",
          list: [
            "Lógica y Diseño de Juegos: Dominio de la física y los principios de diseño de juegos.",
            "Motores de Juegos: Phaser, Unity.",
            "WebGL: Renderización de gráficos 3D en el navegador.",
            "Compatibilidad entre Navegadores: Funcionamiento fluido en distintos navegadores y dispositivos.",
            "Rendimiento de Juegos: Optimización con herramientas como Lighthouse."
          ]
        },
        {
          title: "Desarrollador de Blockchain",
          description: "Un Desarrollador de Blockchain se especializa en diseñar e implementar soluciones tecnológicas basadas en blockchain. Crean aplicaciones y contratos inteligentes seguros, transparentes y descentralizados utilizando diversas plataformas y lenguajes de programación blockchain.",
          list: [
            "Desarrollo de Contratos Inteligentes: Solidity y Rust.",
            "Plataformas Blockchain: Ethereum, Binance Smart Chain.",
            "Desarrollo de DApps: Creación de aplicaciones descentralizadas.",
            "DeFi: Finanzas Descentralizadas.",
            "Web3.js: Biblioteca para interactuar con redes y aplicaciones blockchain.",
            "Seguridad Blockchain: Aprender mejores prácticas."
          ]
        },
        {
          title: "Desarrollador de AR y VR",
          description: "Un Desarrollador de AR y VR se especializa en crear experiencias inmersivas de realidad aumentada (AR) y realidad virtual (VR). Diseñan y desarrollan aplicaciones interactivas, juegos y simulaciones que combinan contenido digital con el mundo real o crean entornos virtualmente completos.",
          list: [
            "Frameworks de AR/VR: Unity 3D, A-Frame.",
            "Modelado 3D.",
            "Computación Espacial.",
            "Reconocimiento de Gestos: Seguimiento de manos para la interacción del usuario.",
            "Diseño Inmersivo: Creación de una experiencia de usuario inmersiva y amigable.",
            "Desarrollo Multiplataforma: Ejecución en diversos dispositivos."
          ]
        },
        {
          title: "Desarrollador de PWA Web",
          description: "Un Desarrollador de PWA (Progressive Web App) Web se especializa en construir aplicaciones web que ofrecen una experiencia fluida y similar a la de una aplicación en todos los dispositivos. Utilizan tecnologías web modernas para crear aplicaciones capaces de funcionar sin conexión, responsivas y de carga rápida que pueden ser accedidas a través de navegadores web y instaladas en dispositivos de los usuarios.",
          list: [
            "Service Workers: Funcionalidad sin conexión y sincronización en segundo plano.",
            "Manifiesto de la Aplicación Web: Define el comportamiento de la aplicación, pantalla de inicio, etc.",
            "Diseño Responsivo: El diseño debe adaptarse a todos los dispositivos.",
            "Estrategias de Caché: Aumentar el rendimiento y reducir los tiempos de carga.",
            "Notificaciones Push: Reenganchar a los usuarios.",
            "Arquitectura de App-Shell: Proporcionar una experiencia inicial rápida."
          ]
        },
        {
          title: "Desarrollador de Internet de las Cosas (IoT)",
          description: "Un Desarrollador de Internet de las Cosas (IoT) se especializa en diseñar, desarrollar e implementar soluciones de IoT. Crean dispositivos interconectados, sensores y sistemas de software que permiten a los dispositivos recopilar y compartir datos, haciendo que el mundo físico esté más conectado y sea más eficiente.",
          list: [
            "Protocolos de IoT: Protocolos de comunicación como MQTT, CoAP y HTTP.",
            "Integración de Hardware: Sensores, actuadores y microcontroladores.",
            "Servicios de IoT en la Nube: AWS IoT, Google Cloud IoT.",
            "Transmisión de Datos: Configuración de canalización de datos.",
            "Aplicaciones de Control Móvil: Uso y pruebas a distancia.",
            "Aprendizaje Automático: Aplicación de modelos de aprendizaje automático."
          ]
        },
        {
          title: "Desarrollador de Chatbots",
          description: "Un Desarrollador de Chatbots se especializa en crear agentes conversacionales inteligentes para diversas aplicaciones. Diseñan, desarrollan y optimizan chatbots utilizando tecnologías de procesamiento de lenguaje natural y aprendizaje automático para mejorar el soporte al cliente, automatizar tareas y mejorar las interacciones de los usuarios en diversas plataformas.",
          list: [
            "Procesamiento de Lenguaje Natural: NLTK, SpaCy, Tensorflow.",
            "Frameworks de Chatbots: DialogFlow, Microsoft Bot Framework.",
            "Integraciones: Slack, Discord, WhatsApp.",
            "Asistentes de Voz: Amazon Alexa, Google Assistant.",
            "Comprensión Contextual: Mantener la participación del usuario.",
            "Pruebas y Análisis."
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Explorando algunas Etiquetas HTML 5 Poderosas para una Web Moderna",
      meta: "Descubre el potencial de las etiquetas HTML 5 para transformar tu web en una experiencia moderna e interactiva",
      image: HTML5Img,
      slug: "explorando-algunas-etiquetas-html5-poderosas-para-una-web-moderna/4",
      alt: "Logo HTML 5 para la web moderna",
      articleSummary: "Me sorprende cuántas etiquetas desconocía; algunas de ellas ya las había explorado de manera superficial, mientras que otras apenas las había utilizado. A continuación, echaremos un vistazo a algunas de ellas.",
      readTime: "4",
      tags: ["HTML"],
      sharedOn: ["Twitter", "LinkedIn"],
      publishDate: "Octubre 9, 2023",
      steps: [
        {
          title: "Comenzaremos nuestra lista con el elemento 'Dataset'",
          description: "Para crear una entrada de datos y una lista, utilizamos tanto la etiqueta 'input' como 'datalist'. La propiedad 'list' del elemento 'input' hace referencia al 'datalist', lo que nos permite tener una entrada donde podemos ingresar datos.",
          code: "<label for='languages'>language:</label>\n<input list='languages' id='language-choice' name='language-choice'>\n\n<datalist id='languages'>\n    <option value='Javascript'>\n    <option value='Java'>\n    <option value='Swift'>\n    <option value='Go'>\n    <option value='PHP'>\n</datalist>",
          img: datasetImg,
          imgAlt: "Ejemplo de elemento dataset de html",
        },
        {
          title: "Inputs para capturar imagen, videos y audio",
          description: "Este código HTML representa un formulario que permite a los usuarios cargar imágenes o videos en un servidor web.  El atributo capture nos permite acceder a la cámara de los dispositivos móviles.",
          img: typeFile,
          imgAlt: "código HTML para enviar fotos y videos al servidor nativo",
        },
        {
          title: "La etiqueta <dialog> en HTML para Cuadros de Diálogo Modales",
          description: "La etiqueta <dialog> en HTML se utiliza para crear un cuadro de diálogo modal en una página web. Un cuadro de diálogo modal es una ventana emergente que bloquea la interacción con el resto de la página hasta que el usuario interactúa con él o lo cierra.",
          img: dialogHtmlImg,
          imgAlt: "Código de ejemplo para un dialog en html",
        },
        {
          title: "Uso de las Etiquetas <details> y <summary> en HTML para Contenido Colapsable",
          description: "`<details>` y `<summary>` en HTML crean secciones colapsables. El contenido en `<details>` está oculto inicialmente y se expande al hacer clic en `<summary>`. Son útiles para mostrar información adicional de manera ordenada y permiten a los usuarios controlar qué contenido ver, mejorando la usabilidad web."
        },
        {
          title: "Propiedad de HTML Popover nos muestra elemento flotable",
          description: "Un popover es una ventana emergente que muestra información extra o opciones al interactuar con un elemento en una aplicación o sitio web. Se utiliza para ofrecer detalles adicionales y se puede cerrar haciendo clic en cualquier parte fuera de él.",
          code: "<button id='popoverButton'>Mostrar Popover</button>\n<div id='popoverContent' class='popover'>This is an example.\n</div>"
        },
        {
          title: "Definiendo Elementos de Búsqueda",
          description: "El elemento <search> nos permite definir elementos que forman parte de una búsqueda, proporcionando una estructura para agrupar y organizar los componentes relacionados con la búsqueda.",
          code: "<search>\n<form>\n<label for='search'>Buscar:</label>\n<input type='search' id='search' name='search' placeholder='Ingrese su búsqueda'>\n<button type='submit'>Buscar</button>\n</form>\n</search>"
        },
        {
          description: "Si has llegado hasta aquí, te agradezco por tu atención. Espero que alguno de estos consejos de HTML te haya resultado útil."
        }
      ]
    },
    {
      id: 5,
      title: "¿Cómo instalar Linux Mint junto con Windows 11?",
      meta: "Aprende cómo instalar Linux Mint junto a Windows 11.",
      image: linuxWindowsArticle,
      slug: "como-instalar-linux-mint-junto-con-windows-11/5",
      alt: "Pinguino de Linux y fondo de Windows",
      articleSummary: "Esta guía te mostrará cómo correr Linux Mint y Windows juntos en un mismo PC. Los pasos mencionados sirven para las distribuciones de Linux Mint. Bueno, veamos cómo arrancar Linux de forma dual en un sistema Windows.",
      readTime: "5",
      tags: ["Windows", "Linux"],
      sharedOn: ["Twitter", "LinkedIn"],
      publishDate: "Octubre 3, 2023",
      steps: [
        {
          title: "Haz una copia de seguridad [opcional]",
          description: "Siempre es bueno tener una copia de seguridad, por si acaso pasa algo. Descarga la imagen ISO según tu sistema operativo de Windows.",
          resource: "https://www.microsoft.com/en-us/software-download/"
        },
        {
          title: "Descarga la distribución de Linux Mint",
          description: "Ingresa al sitio oficial de Linux Mint y navega hacia la sección de descargas. Busca la distribución que más te guste y descárgala. Posiblemente tomará un poco de tiempo dependiendo de tu conexión a Internet.",
          resource: "https://linuxmint.com/"
        },
        {
          title: "Descarga Rufus para crear unidades de arranque USB",
          description: "Haz clic derecho sobre el instalador de Rufus y ejecútalo como administrador. Luego, en 'Dispositivo', selecciona la USB y en 'Seleccionar' busca la imagen ISO de Linux.  En 'Esquema de partición', es importante seleccionar 'GPT' si el sistema de destino es UEFI.  Haz clic en 'Empezar' y luego en 'OK' en el modo 'Imagen ISO (recomendado)'.",
          resource: "https://rufus.ie/es/"
        },
        {
          title: "Arranque desde el BIOS",
          description: "Para acceder a nuestro BIOS depende de nuestro equipo, pero si al iniciar el equipo y presionando F2, F12 o F10 no funciona, debemos buscar con que botón permite ingresar al BIOS."
        },
        {
          title: "Instalación de Linux Mint",
          description: "El instalador de Linux Mint nos permite particionar nuestro disco duro. Debemos seleccionar 'OEM install' (for manufacturers), elegimos nuestros ajustes, y seguimos los pasos de instalación. Luego, seleccionamos 'Instalar Linux Mint junto a Windows Boot Manager. Ajustamos nuestro espacio de almacenamiento y continuamos."
        },
        {
          title: "Seleccionar sistema operativo al iniciar",
          description: "Ya solo nos queda reiniciar y seleccionar el sistema operativo que deseamos usar y disfrutar. 🍾🎉"
        }
      ]
    }
  ]
}

const postId = Number(slug[1])
const blog = blogData.blog.find(blog => blog.id === postId)

</script>

<template>
  <BlogArticle :data="blog" />
</template>
