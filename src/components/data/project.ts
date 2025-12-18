export const projects = [
    {
        picture: "/capstone_preview.png",
        title: "Remote-Controlled BLDC Motor System",
        description:
            "Senior capstone project developing a precision brushless DC motor platform with encoder-based RPM and position " +
            "control. Implemented wireless control and real-time telemetry via an Android application using Bluetooth " +
            "Low Energy (BLE), enabling closed-loop motor operation and live feedback.",
        tags: [
            "Kotlin",
            "C/C++",
            "STM32",
            "Bluetooth Low Energy",
            "Embedded Systems",
            "Real-Time Systems"
        ],
    },
    {
        picture: "/piezo_preview.png",
            title: "Real-Time Structural Health Monitoring of Piezoresistive Composites",
            description:
                "A real-time structural health monitoring interface for piezoresistive composite materials that enables " +
                "live acquisition, visualization, and analysis of sensor data during mechanical testing. The system provides " +
                "interactive time-series plots and spatial heatmap views to observe material response under stress, and " +
                "integrates with external hardware for synchronized mechanical interrogation.",
        tags: [
            "Python",
            "ESP32",
            "Multithreading",
            "Real-Time Visualization",
            "Data Structures & Algorithms"
        ],
    },
    {
        picture: "/boba_preview.png",
        title: "Boba Shop Full-Stack Web Application",
        description:
            "Dynamic, database-driven full-stack web application for the complete operations of a boba tea shop. " +
            "All application state-including menu items, pricing, customer data, and orders-is fetched and updated from " +
            "a centralized PostgreSQL database. The system has role-based interfaces for customers, cashiers, and managers." +
            "Actions performed through the UI propagate directly to the backend, allowing for real-time updates.",
        tags: [
            "React",
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Dynamic Web Application",
            "Full-Stack Development"
        ],
    },

];
