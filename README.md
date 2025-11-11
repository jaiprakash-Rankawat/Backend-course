# Q1. What is Http Method?

    1. Get - Help in Getting Data
    2. Post - Help in Adding Data
    3. patch - Help in Updating Data
    4. Delete - Help in Deleting Data

### Note1 : Use route.ts or route.js for backend

### Note2 : Frontend and Backend cannot use in same file

# Q2 : How many function can we use in page.tsx.

# Q3. What is Json and json.stringify ?

# Q4. How to Get Data ?

1.  plain text
2.  json

```jsx
export async function GET() {
  return new Response("Rahda Rani");
}
```

# Q5. difference between new Response and Response.json()

```jsx
return Response.json({ name: "Radha Rani" });
```

# Q6. what is Response ?

```jsx
new Response(body, options);
```

- What is body and options ?

```jsx
return new Response(JSON.stringify({ message: "Radha Rani" }), {
  status: 200,
  headers: {
    "Content-Type": "application/json", // Tells browser it's JSON
    "Cache-Control": "no-store", // Don’t cache it
  },
});
```

### 📘 Common HTTP Status Codes

| Code  | Meaning                  | Example Use                                            |
| ----- | ------------------------ | ------------------------------------------------------ |
| `200` | ✅ OK                    | Everything worked perfectly                            |
| `201` | ✅ Created               | New record created successfully (like user or product) |
| `400` | ⚠️ Bad Request           | The client sent invalid data                           |
| `401` | 🔒 Unauthorized          | Authentication required or failed                      |
| `403` | 🚫 Forbidden             | User is not allowed to access this resource            |
| `404` | ❌ Not Found             | Resource doesn’t exist                                 |
| `500` | 💥 Internal Server Error | Something went wrong on the server                     |

# Q7. How to post Data ?

```jsx
export async function POST(req: Request) {
  let student = await req.json();

  const newStudent = { ...student };

  child.push(newStudent);

  return new Response(JSON.stringify(child));
}
```

# Q8 . How to use dynamic route in backend ?

# Q9. patch and delete ?

# Q10. header and cookies ?

# Q11. dynamic route

<!-- postman complete  -->

<!-- # moongoose -->
