import {useEffect, useState} from "react";

const CategoryList  = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetch('https://opentdb.com/api_category.php');
                const data = await response.json();
                setCategories(data.trivia_categories);
            } catch (err) {
                console.log(err);
            }
        };

        getCategories();
    }, []);

    return (
        categories.map(category => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))
    );
};

export default CategoryList;