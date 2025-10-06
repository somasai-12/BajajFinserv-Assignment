## Tech Stack

* **Backend**: Node.js, Express.js
* **Deployment**: Backend hosted on Render, Frontend on Vercel

## API Endpoint

The API has a single endpoint for processing the data.

**Method**: `POST`
**Endpoint**: `/bfhl` 
**Success Status Code**: `200` 

---

### Request Body

The API accepts a JSON object in the body. User details (`fullName`, `email`, etc.) are optional and will fall back to default values if not provided.

```json
{
    "data": ["a","1","334","4","R", "$"],
    "fullName": "John Doe",
    "dob": "17091999",
    "email": "john@xyz.com",
    "rollNumber": "ABCD123"
}
```

### Success Response

A successful request will return a JSON object with the processed data.

```json
{
    "is_success": true,
    "user_id": "john_doe_17091999",
    "email": "john@xyz.com",
    "roll_number": "ABCD123",
    "odd_numbers": [ "1" ],
    "even_numbers": [ "334", "4" ],
    "alphabets": [ "A", "R" ],
    "special_characters": [ "$" ],
    "sum": "339",
    "concat_string": "Ra"
}
```

* **Hosted API Endpoint**: https://bajajfinserv-assignment-hxl7.onrender.com/bfhl
* **Live Frontend Tester**: https://bajaj-finserv-assignment-ten.vercel.app/