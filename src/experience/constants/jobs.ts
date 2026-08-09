export interface Job {
  dateStart: string;
  dateEnd: string;
  day: string;
  company: string;
  playTime: string;
  highlights: string[];
  position: string;
}

export const jobs: Job[] = [{
  company: "Corporativo Medina",
  dateStart: "02/26",
  dateEnd: "05/26",
  day: "Mon",
  playTime: "21:51",
  position: "dev FullStack",
  highlights: [
    "Diseñé e implementé el backend de un sistema de inventarios con Django + PostgreSQL, mejorando la trazabilidad y visibilidad de activos en +90%.",
    "Reduje los tiempos de despliegue en 80%, automatizando pipelines de CI/CD con Docker y Dockploy.",
    "Definí la arquitectura técnica de un CRM interno (Django + Vue + PostgreSQL), asegurando escalabilidad para operaciones futuras.",
    "Construí landing pages para múltiples unidades de negocio, optimizando rendimiento y UX."
  ]
},
{company: "Residencias | Corporativo Medina",
  dateStart: "06/25",
  dateEnd: "12/25",
  day: "Tue",
  playTime: "43:43",
  position: "dev FullStack",
  highlights: [
    "Desarrollé un sistema de gestión de órdenes (SGOT) que centralizó clientes, vehículos e historial, reduciendo el tiempo de creación de órdenes en 70%.",
    "Construí una API REST completa con Django para gestión de clientes, órdenes y gastos, con diseño normalizado para integridad de datos.",
    "Implementé un tablero Kanban que mejoró la visibilidad del progreso del equipo y la gestión de tareas."
  ]}
]
