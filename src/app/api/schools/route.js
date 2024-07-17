import { query } from "@/app/lib/db";

export async function GET(request) {
    const schools = await query({
        query: "SELECT * FROM schools",
        values: [],
    });

    let data = JSON.stringify(schools);
    return new Response(data, {
        status: 200,
    });
}


export async function POST(request) {
    const { title, body} = await request.json();
    const updateUsers = await query({
        query: "INSERT INTO schools (title,body) VALUES (?, ?)",
        values: [title, body],
    });
    const result = updateUsers.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
    const school = {
        title: title,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        school: title
    }));
}

export async function DELETE(request) {

    const { id } = await request.json();
    const deleteUser = await query({
        query: "DELETE FROM schools WHERE id = ?",
        values: [id],
    });
    const result = deleteUser.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
  
    return new Response(JSON.stringify({
        message: message,
        status: 200,
 
    }));

}