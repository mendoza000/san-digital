# Product Requirements Document (PRD)

## SaaS de Gestión de Sanes

### 1. Visión del Producto

**Problema a resolver:**
Los organizadores de sanes (rifas/susus) actualmente gestionan sus operaciones de forma manual usando cuadernos, Excel o métodos rudimentarios, lo que genera:

- Errores en cálculos y seguimiento
- Pérdida de información
- Dificultad para comunicarse con participantes
- Falta de transparencia y profesionalismo
- Tiempo excesivo en tareas administrativas

**Solución propuesta:**
Una plataforma SaaS integral que digitaliza y automatiza la gestión completa de sanes, desde la creación hasta el seguimiento de pagos y comunicación con participantes.

**Propuesta de valor:**

- Automatización de cálculos y gestión
- Comunicación directa vía WhatsApp
- Control profesional y transparente
- Reducción del tiempo administrativo en 80%
- Acceso desde cualquier dispositivo

---

### 2. Objetivos del Producto

**Objetivos Primarios:**

- Digitalizar completamente el proceso de gestión de sanes
- Automatizar cálculos de cuotas, duración y ganancias
- Facilitar la comunicación con participantes
- Crear un sistema confiable de seguimiento

**Métricas de Éxito:**

- 100+ organizadores registrados en los primeros 6 meses
- Retención del 70% después del período gratuito
- NPS > 50
- Reducción del 80% en tiempo de gestión reportado por usuarios

---

### 3. Audiencia Objetivo

**Usuario Primario:**

- Organizadores de sanes en Venezuela y Latinoamérica
- Personas que manejan entre 5-50 participantes por san
- Perfil socioeconómico medio-bajo a medio
- Edad: 25-55 años
- Familiarizados con WhatsApp y herramientas básicas digitales

**Pain Points:**

- Cálculos manuales propensos a errores
- Pérdida de cuadernos o archivos
- Dificultad para contactar participantes
- Falta de respaldo y transparencia
- Tiempo excesivo en administración

---

### 4. Funcionalidades Core

### 4.1 Gestión de Sanes

**Crear San:**

- Nombre del san (ej: "San de Televisores Enero 2025")
- Monto de inversión por producto
- Ganancia sugerida por producto
- Número de participantes
- Monto de cuota mensual
- **Cálculo automático:** Duración basada en parámetros ingresados

**Fórmula de cálculo:**

```
Duración (meses) = (Monto inversión + Ganancia) × Número participantes / (Cuota mensual × Número participantes)
```

**Estados del San:**

- Planificación
- Abierto para inscripciones
- En progreso
- Completado
- Cancelado

### 4.2 Gestión de Participantes

**Información del Participante:**

- Nombre completo
- Número de teléfono (formato internacional)
- Cédula de identidad
- Fecha de ingreso
- Estado (Activo/Inactivo/Moroso)
- Historial de pagos

**Funcionalidades:**

- Agregar/editar/eliminar participantes
- Asignar participantes a sanes específicos
- Seguimiento de pagos por participante
- Marcado de morosidad automático

### 4.3 Sistema de Comunicación

**Integración WhatsApp:**

- Envío de mensajes vía wa.me/{numero}
- Plantillas de mensajes personalizables
- Variables dinámicas (nombre, monto adeudado, fecha)

**Tipos de Plantillas:**

- Bienvenida al san
- Recordatorio de pago
- Confirmación de pago recibido
- Aviso de morosidad
- Anuncio de ganador
- Mensajes personalizados

**Variables disponibles:**

- {nombre}
- {monto_cuota}
- {fecha_vencimiento}
- {saldo_pendiente}
- {nombre_san}

### 4.4 Dashboard Principal

**Métricas Generales:**

- Total de sanes activos
- Participantes totales
- Ingresos del mes
- Morosos pendientes
- Próximos vencimientos

**Vista de Sanes:**

- Lista de sanes con estados
- Progreso visual de cada san
- Acciones rápidas (agregar participante, enviar mensaje)

---

### 5. Especificaciones Técnicas

### 5.1 Stack Tecnológico

**Frontend:**

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui para componentes
- React Hook Form para formularios
- Zustand para estado global

**Backend:**

- Supabase (Base de datos PostgreSQL)
- Supabase Auth para autenticación
- Edge Functions para lógica de negocio
- Row Level Security (RLS)

**Infraestructura:**

- Vercel para deployment
- Dominio: nombreapp.com (landing) + app.nombreapp.com (aplicación)
- CDN global para assets

### 5.2 Arquitectura de Base de Datos

**Tablas principales:**

```sql
-- Usuarios/Organizadores
users (
  id, email, name, created_at, subscription_status, trial_ends_at
)

-- Sanes
sanes (
  id, user_id, name, investment_amount, suggested_profit,
  participant_count, monthly_quota, duration_months,
  status, created_at, started_at
)

-- Participantes
participants (
  id, san_id, name, phone, cedula, join_date,
  status, total_paid, last_payment_date
)

-- Plantillas de mensajes
message_templates (
  id, user_id, name, content, template_type, variables
)

-- Historial de pagos
payment_history (
  id, participant_id, amount, payment_date, notes
)
```

---

### 6. Experiencia de Usuario (UX)

### 6.1 Flujo de Onboarding

1. **Registro:** Email + contraseña
2. **Configuración inicial:** Nombre de la organización, país
3. **Tutorial interactivo:** Crear primer san de ejemplo
4. **Invitación:** Agregar primeros participantes de prueba

### 6.2 Flujos Principales

**Crear un San:**

1. Dashboard → "Nuevo San"
2. Formulario con validaciones en tiempo real
3. Preview de cálculos automáticos
4. Confirmación y creación
5. Redirección a gestión del san creado

**Gestionar Participantes:**

1. Desde san específico → "Gestionar Participantes"
2. Lista con acciones rápidas
3. Modal para agregar/editar
4. Integración directa con WhatsApp

**Comunicación:**

1. Seleccionar participantes (individual/grupal)
2. Elegir plantilla o mensaje personalizado
3. Preview con variables reemplazadas
4. Envío masivo via WhatsApp Web

---

### 7. Modelo de Negocio

### 7.1 Estrategia de Precios

**Freemium Trial:**

- 2 meses completamente gratis
- Todas las funcionalidades incluidas
- Sin limitaciones de participantes o sanes

**Suscripción Mensual:**

- $8 USD/mes por organizador
- Pago anual: $80 USD (ahorro de $16)
- Sin límites de participantes o sanes
- Soporte prioritario

### 7.2 Estrategia de Adquisición

**Canales:**

- Marketing de contenido (YouTube, TikTok)
- Referencias palabra a palabra
- Presencia en grupos de Facebook relacionados
- Partnerships con influencers del nicho

**Propuesta inicial:**
"Gestiona tus sanes como un profesional - 2 meses gratis"

---

### 8. Roadmap de Desarrollo

### Fase 1 - MVP (2-3 meses)

- [ ] Landing page optimizada para conversión
- [ ] Sistema de autenticación
- [ ] CRUD de sanes y participantes
- [ ] Cálculos automáticos básicos
- [ ] Dashboard principal
- [ ] Integración básica WhatsApp

### Fase 2 - Core Features (1-2 meses)

- [ ] Sistema de plantillas de mensajes
- [ ] Gestión de pagos y morosidad
- [ ] Reportes básicos
- [ ] Sistema de suscripciones
- [ ] Onboarding interactivo

### Fase 3 - Optimización (1-2 meses)

- [ ] Métricas avanzadas y analytics
- [ ] Exportación de datos
- [ ] Notificaciones automáticas
- [ ] Mobile app (PWA)
- [ ] Integraciones adicionales

### Fase 4 - Escalamiento (ongoing)

- [ ] Multi-idioma
- [ ] Múltiples monedas
- [ ] API pública
- [ ] White-label solutions
- [ ] Marketplace de plantillas

---

### 9. Criterios de Aceptación

### Funcionalidades Críticas:

- ✅ Usuario puede crear un san en menos de 3 minutos
- ✅ Cálculos automáticos 100% precisos
- ✅ Envío de mensajes WhatsApp funcional en 95% de dispositivos
- ✅ Dashboard carga en menos de 2 segundos
- ✅ Sistema funciona offline para consultas básicas

### Métricas de Calidad:

- Uptime > 99.5%
- Tiempo de respuesta < 300ms
- Mobile responsive en todos los dispositivos
- Accesibilidad WCAG AA
- Tests automatizados > 80% coverage

---

### 10. Riesgos y Mitigaciones

**Riesgo Alto:**

- **Adopción lenta:** Mitigación con período gratuito extendido y marketing dirigido
- **Competencia:** Mitigación con features únicos y UX superior

**Riesgo Medio:**

- **Escalabilidad técnica:** Mitigación con arquitectura cloud-native
- **Regulaciones WhatsApp:** Mitigación con integración oficial y términos claros

**Riesgo Bajo:**

- **Cambios en stack tecnológico:** Mitigación con tecnologías estables y documentadas

---

### 11. Métricas y KPIs

**Métricas de Producto:**

- MAU (Monthly Active Users)
- Sanes creados por usuario/mes
- Tiempo promedio de gestión por san
- Tasa de envío exitoso de mensajes

**Métricas de Negocio:**

- MRR (Monthly Recurring Revenue)
- Churn rate mensual
- Customer Acquisition Cost (CAC)
- Customer Lifetime Value (CLV)
- Conversión de trial a pago

**Métricas de Usuario:**

- Time to first value (crear primer san)
- Feature adoption rate
- Support ticket volume
- Net Promoter Score (NPS)

---

### 12. Próximos Pasos

1. **Validación de mercado:** Entrevistas con 20+ organizadores potenciales
2. **Prototipo:** Figma con flujos principales
3. **MVP técnico:** 2-3 meses de desarrollo
4. **Beta cerrado:** 10-20 usuarios para feedback
5. **Launch público:** Marketing campaign y onboarding masivo

---

_Este PRD es un documento vivo que se actualizará basado en feedback de usuarios y métricas de producto._
