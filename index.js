const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); 


app.post('/bfhl', (req, res) => {
    try {
        const { data, fullName, email, rollNumber, dob } = req.body;
        
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input: 'data' must be an array."
            });
        }
        const finalFullName = fullName ?? "John Doe";
        const finalDob = dob ?? "17091999";
        const finalEmail = email ?? "john@xyz.com";
        const finalRollNumber = rollNumber ?? "ABCD123";

        const userId = `${finalFullName.toLowerCase().replace(/\s/g, '_')}_${finalDob}`;

        let odd_numbers = [];
        let even_numbers = [];
        let alphabets = [];
        let special_characters = [];
        let sum = 0;
        let alphabet_string = "";

        data.forEach(item => {
            if (!isNaN(item) && item.trim() !== "") { 
                const num = Number(item);
                sum += num;
                if (num % 2 === 0) {
                    even_numbers.push(item.toString());
                } else {
                    odd_numbers.push(item.toString());
                }
            } else if (/^[a-zA-Z]+$/.test(item)) { 
                alphabets.push(item.toUpperCase());
                alphabet_string += item;
            } else if (item.trim() !== "") {
                special_characters.push(item);
            }
        });

        const reversed_alphabets = alphabet_string.split('').reverse().join('');
        let concat_string = "";
        for (let i = 0; i < reversed_alphabets.length; i++) {
            concat_string += (i % 2 === 0) 
                ? reversed_alphabets[i].toUpperCase() 
                : reversed_alphabets[i].toLowerCase();
        }
        
        const response = {
            is_success: true,
            user_id: userId,
            email: finalEmail,
            roll_number: finalRollNumber,
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: sum.toString(),
            concat_string: concat_string,
        };
        
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({
            is_success: false,
            error: error.message
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});