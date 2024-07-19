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
    const { name, address,city,state,contact,email} = await request.json();
    const updateUsers = await query({
        query: "INSERT INTO schools (name, address,city,state,contact,email) VALUES (?, ?, ?, ?, ?, ?)",
        values: [name, address,city,state,contact,email],
    });
    const result = updateUsers.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
    const school = {
        name: name,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        school: name
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