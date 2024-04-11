
import "dotenv/config"
import { neon } from "@neondatabase/serverless"
import * as schema from "../db/schema"
import { drizzle } from "drizzle-orm/neon-http"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, ({ schema }))

const main = async () => {
    try {
        console.log("Seeding database")

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challengeProgress)

        // Insert courses
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Android Automation Testing",
                imageSrc: "next.svg"
            },
            {
                id: 2,
                title: "iOS Automation Testing",
                imageSrc: "next.svg"
            },
            {
                id: 3,
                title: "Web Automation Testing",
                imageSrc: "next.svg"
            },
            {
                id: 4,
                title: "Windows Dekstop Automation Testing",
                imageSrc: "next.svg"
            },
            {
                id: 5,
                title: "Mac Dekstop Automation Testing",
                imageSrc: "next.svg"
            },
            {
                id: 6,
                title: "API Automation Testing",
                imageSrc: "next.svg"
            },
            {
                id: 7,
                title: "Database Automation Testing",
                imageSrc: "next.svg"
            },
            {
                id: 8,
                title: "GRPC Automation Testing",
                imageSrc: "next.svg"
            },
        ])

        // Insert units
        await db.insert(schema.units).values([
            {
            id: 1,
            courseId: 1, // Android Automation Testing
            title: "Unit 1",
            description: "Basic of Android Automation Testing",
            order: 1
            }
        ])

        // Insert lessons
        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1, // Unit 1
                order: 1,
                title: "Lesson 1"
            }
        ])

        // Insert challenges
        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1, // Lesson 1
                type: "SELECT",
                order: 1,
                question: "What is POM (Page Object Model) in Automation Testing?"
            }
        ])

        // Insert challenge options
        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1, // What is POM (Page Object Model) in Automation Testing?
                imageSrc: "/next.svg",
                correct: true,
                text: "Test true",
                audioSrc: ""
            },
            {
                id: 2,
                challengeId: 1, // What is POM (Page Object Model) in Automation Testing?
                imageSrc: "/next.svg",
                correct: false,
                text: "Test false",
                audioSrc: ""
            },
            {
                id: 3,
                challengeId: 1, // What is POM (Page Object Model) in Automation Testing?
                imageSrc: "/next.svg",
                correct: false,
                text: "Test false",
                audioSrc: ""
            }
        ])

        console.log("Seeding finish")
    } catch (error) {
        console.log(error)
        throw new Error("Failed to seed the database")
    }
}

main()
