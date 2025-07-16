import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    semester: 1,
    subjects: [
      { name: "Introducción a la historia", type: "teórico" },
      { name: "Mundo antiguo", type: "teórico" },
      { name: "Historia y filosofía de la educación en chile y latam", type: "teórico" },
      { name: "Autorregulación", type: "teórico" },
      { name: "Introducción a la geografía", type: "teórico" },
    ],
  },
  {
    semester: 2,
    subjects: [
      { name: "Mundo medieval", type: "teórico" },
      { name: "Sociedades indígenas de américa y chile", type: "teórico" },
      { name: "Pensamiento político y estado", type: "teórico" },
      { name: "Políticas públicas y sistema educativo chileno", type: "teórico" },
      { name: "Lenguaje y comunicación", type: "teórico" },
    ],
  },
  {
    semester: 3,
    subjects: [
      { name: "Mundo moderno XVI-XVIII", type: "teórico" },
      { name: "América colonial XVI-XVIII", type: "teórico" },
      { name: "Chile colonial XVII-XVIII", type: "teórico" },
      { name: "Teoría del pensamiento económico", type: "teórico" },
      { name: "Gestión en el aula", type: "teórico" },
      { name: "Ética y educación", type: "teórico" },
    ],
  },
  {
    semester: 4,
    subjects: [
      { name: "Mundo contemporáneo XVIII-XIX", type: "teórico" },
      { name: "América siglo XIX", type: "teórico" },
      { name: "Chile siglo XIX", type: "teórico" },
      { name: "Geografía física y problemáticas medioambientales", type: "teórico" },
      { name: "Teoría del aprendizaje en el contexto de la adolescencia y cultura juvenil", type: "teórico" },
      {
        name: "Práctica inicial",
        type: "práctico",
        prerequisites: [
          "Historia y filosofía de la educación en chile y latam",
          "Políticas públicas y sistema educativo chileno",
        ],
      },
    ],
  },
  {
    semester: 5,
    subjects: [
      { name: "Mundo contemporáneo XX", type: "teórico" },
      { name: "América siglo XX", type: "teórico" },
      { name: "Chile siglo XX", type: "teórico" },
      { name: "Ciudadanía, democracia y derechos humanos", type: "teórico" },
      { name: "Gestión curricular para el aprendizaje", type: "teórico" },
      { name: "Métodos de evaluación educativa", type: "teórico" },
      { name: "Taller de integración 1", type: "práctico" },
    ],
  },
  {
    semester: 6,
    subjects: [
      { name: "Historia de estados unidos y américa latina", type: "teórico" },
      { name: "Teoría de la historia geográfica de la población y de los asentamientos humanos", type: "teórico" },
      { name: "Planificación curricular y evaluación para la historia y ciencias sociales", type: "teórico" },
      { name: "Didáctica de la historia", type: "teórico" },
      {
        name: "Taller de integración 2",
        type: "práctico",
        prerequisites: ["Taller de integración 1"],
      },
    ],
  },
  {
    semester: 7,
    subjects: [
      { name: "Metodología de la investigación en ciencias sociales", type: "teórico" },
      { name: "Historia del tiempo presente", type: "teórico" },
      { name: "Geografía de chile y américa", type: "teórico" },
      { name: "Didáctica de las ciencias sociales", type: "teórico" },
      {
        name: "Practica",
        type: "práctico",
        prerequisites: ["Práctica inicial"],
      },
    ],
  },
  {
    semester: 8,
    subjects: [
      { name: "Seminario de historia mundial", type: "teórico" },
      { name: "Seminario de historia de chile", type: "teórico" },
      { name: "Seminario de geografía regional de Valparaíso", type: "teórico" },
      { name: "Didáctica de la formación ciudadana", type: "teórico" },
      { name: "Métodos de investigación", type: "teórico" },
      {
        name: "Taller de reflexión sobre la práctica 1",
        type: "teórico",
        prerequisites: ["Práctica inicial", "Practica"],
      },
    ],
  },
  {
    semester: 9,
    subjects: [
      { name: "Monográfico historia Y", type: "teórico" },
      { name: "Seminario de grado I", type: "teórico" },
      {
        name: "Practica profesional",
        type: "práctico",
        prerequisites: ["Práctica inicial", "Practica", "Taller de reflexión sobre la práctica 1"],
      },
    ],
  },
  {
    semester: 10,
    subjects: [
      { name: "Monográfico historia II", type: "teórico" },
      { name: "Elaboración de proyectos educativos en formación ciudadana", type: "teórico" },
      {
        name: "Taller de reflexión sobre la práctica 2",
        type: "teórico",
        prerequisites: ["Taller de reflexión sobre la práctica 1", "Practica profesional"],
      },
      { name: "Seminario de grado II", type: "teórico" },
    ],
  },
]

export default function MallaInteractiva() {
  const [completed, setCompleted] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("completedSubjects")
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem("completedSubjects", JSON.stringify(completed))
  }, [completed])

  const toggleCompleted = (subjectName: string) => {
    setCompleted((prev) =>
      prev.includes(subjectName)
        ? prev.filter((name) => name !== subjectName)
        : [...prev, subjectName]
    )
  }

  const isBlocked = (subject: any) => {
    if (!subject.prerequisites) return false
    return !subject.prerequisites.every((req: string) => completed.includes(req))
  }

  const resetProgress = () => {
    const confirmReset = window.confirm("¿Estás seguro de que quieres reiniciar el progreso?")
    if (confirmReset) {
      localStorage.removeItem("completedSubjects")
      setCompleted([])
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Malla de Pedagogía en Historia</h1>
      <Button onClick={resetProgress} className="mb-6 bg-red-500 hover:bg-red-600 text-white">
        Reiniciar progreso
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.semester}
            className="border rounded-2xl shadow-md p-4 bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">Semestre {course.semester}</h2>
            <ul className="space-y-2">
              {course.subjects.map((subject) => {
                const completedSubject = completed.includes(subject.name)
                const blocked = isBlocked(subject)
                return (
                  <li
                    key={subject.name}
                    className={`flex items-center justify-between px-2 py-1 rounded-lg cursor-pointer ${
                      completedSubject
                        ? "line-through text-gray-400"
                        : blocked
                        ? "text-gray-400 opacity-50 cursor-not-allowed"
                        : "hover:bg-blue-100"
                    }`}
                    onClick={() => {
                      if (!blocked) toggleCompleted(subject.name)
                    }}
                  >
                    <span>
                      {subject.name}
                      <span className="ml-2 text-xs text-gray-500">({subject.type})</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
    }
                  
