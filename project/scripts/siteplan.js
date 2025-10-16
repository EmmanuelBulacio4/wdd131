//Date to the footer
const today = new Date();
const year = today.getFullYear();
document.querySelector("#currentyear").textContent = year;
let lastModification = new Date(document.lastModified)
document.getElementById("lastModified").textContent = lastModification.toLocaleDateString("en-US");

//hamburguer button
const burgerButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.lists');

burgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    burgerButton.classList.toggle('open');
});

//Table for teaches

const teacherTable = [
    {
        fourth: `
        <h2>Class 4th - Teacher</h2>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Lección</th>
                    <th>Students' Book</th>
                    <th>Teacher's Book</th>
                    <th>Activity Book</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="5">Unidad 1</td>
                    <td>Lección 1</td>
                    <td>4 - 6</td>
                    <td>15 – 16</td>
                    <td>66 - 69</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>7 – 8</td>
                    <td>16 – 18</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>9 - 10</td>
                    <td>18 – 20</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>11 – 12</td>
                    <td>20 - 22</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>13</td>
                    <td>22 - 23</td>
                    <td>70</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 2</td>
                    <td>Lección 1</td>
                    <td>14 – 16</td>
                    <td>25 – 26</td>
                    <td>71</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>17 – 18</td>
                    <td>27 – 28</td>
                    <td>72</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>19 – 20</td>
                    <td>28 – 30</td>
                    <td>73</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>21 – 22</td>
                    <td>30 – 32</td>
                    <td>75</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>23</td>
                    <td>32 – 33</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 3</td>
                    <td>Lección 1</td>
                    <td>24 – 26</td>
                    <td>35 – 37</td>
                    <td>76</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>27 – 28</td>
                    <td>37 - 39</td>
                    <td>77</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>29 – 30</td>
                    <td>39 – 40</td>
                    <td>78</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>31 – 32</td>
                    <td>40 – 42</td>
                    <td>79</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>33</td>
                    <td>42 – 43</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 4</td>
                    <td>Lección 1</td>
                    <td>34 – 36</td>
                    <td>45 – 46</td>
                    <td>81</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>37 – 38</td>
                    <td>47 – 48</td>
                    <td>82</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>39 – 40</td>
                    <td>49 – 50</td>
                    <td>83</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>41 – 42</td>
                    <td>50 – 51</td>
                    <td>84</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>43</td>
                    <td>51 – 53</td>
                    <td>85</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 5</td>
                    <td>Lección 1</td>
                    <td>44 – 46</td>
                    <td>55 – 56</td>
                    <td>86</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>47 – 48</td>
                    <td>56 – 58</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>49 – 50</td>
                    <td>58 – 60</td>
                    <td>88</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>51 – 52</td>
                    <td>60 – 62</td>
                    <td>89</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>53</td>
                    <td>62 – 63</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 6</td>
                    <td>Lección 1</td>
                    <td>54 – 56</td>
                    <td>65 – 66</td>
                    <td>91</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>57 – 58</td>
                    <td>67 – 68</td>
                    <td>92</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>59 – 60</td>
                    <td>68 – 70</td>
                    <td>93</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>61 – 62</td>
                    <td>70 – 72</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>63</td>
                    <td>72 – 73</td>
                    <td>95</td>
                </tr>
            </tbody>
        </table>`
    },
    {
        fifth: `
        <h2>Class 5th - Student
        <table>
            <thead>
                <tr>
                    <th>Trimestre</th>
                    <th>Lección</th>
                    <th>Students' Book</th>
                    <th>Teacher's Book</th>
                    <th>Activity Book</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Diagnóstico</td>
                    <td>-</td>
                    <td>4 – 7</td>
                    <td>15 – 16</td>
                    <td>70 – 71</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 1</td>
                    <td>Lección 1</td>
                    <td>8 – 10</td>
                    <td>18 – 19</td>
                    <td>72</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>11 – 12</td>
                    <td>20 – 21</td>
                    <td>73</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>13 – 14</td>
                    <td>21 – 22</td>
                    <td>74 – 75</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>15 – 16</td>
                    <td>22 – 23</td>
                    <td>76</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>17</td>
                    <td>23</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 2</td>
                    <td>Lección 1</td>
                    <td>18 – 20</td>
                    <td>25 – 26</td>
                    <td>77</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>21 – 22</td>
                    <td>26 – 28</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>23 – 24</td>
                    <td>28 – 30</td>
                    <td>78 – 79</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>25 – 26</td>
                    <td>30 – 32</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>27</td>
                    <td>32</td>
                    <td>81</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 3</td>
                    <td>Lección 1</td>
                    <td>28 – 30</td>
                    <td>35 – 36</td>
                    <td>82</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>31 – 32</td>
                    <td>36 – 39</td>
                    <td>83</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>33 – 34</td>
                    <td>39 – 40</td>
                    <td>84</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>35 – 36</td>
                    <td>41 – 42</td>
                    <td>85</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>37</td>
                    <td>43</td>
                    <td>86</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 4</td>
                    <td>Lección 1</td>
                    <td>38 – 40</td>
                    <td>45 – 46</td>
                    <td>87</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>41 – 42</td>
                    <td>46 – 48</td>
                    <td>88</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>43 – 44</td>
                    <td>48 – 50</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>45 – 46</td>
                    <td>50 – 51</td>
                    <td>89</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>47</td>
                    <td>53</td>
                    <td>90 – 91</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 5</td>
                    <td>Lección 1</td>
                    <td>48 – 50</td>
                    <td>55 – 56</td>
                    <td>92</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>51 – 52</td>
                    <td>56 – 58</td>
                    <td>93</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>53 – 54</td>
                    <td>58 – 59</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>55 – 56</td>
                    <td>60 – 61</td>
                    <td>95</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>57</td>
                    <td>61 – 63</td>
                    <td>96</td>
                </tr>
                <tr>
                    <td rowspan="5">Unidad 6</td>
                    <td>Lección 1</td>
                    <td>58 – 60</td>
                    <td>65 – 66</td>
                    <td>97</td>
                </tr>
                <tr>
                    <td>Lección 2</td>
                    <td>61 – 62</td>
                    <td>66 – 67</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Lección 3</td>
                    <td>63 – 64</td>
                    <td>68 – 70</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Lección 4</td>
                    <td>65 – 66</td>
                    <td>70 – 71</td>
                    <td>98</td>
                </tr>
                <tr>
                    <td>Lección 5</td>
                    <td>67</td>
                    <td>71 – 73</td>
                    <td>99 – 101, 102</td>
                </tr>
            </tbody>
        </table>`
    }];


const stuTable = [
    {
        fourthStu: `
        <h2>Class 4th - Student</h2>
        <table>
    <thead>
        <tr>
            <th></th>
            <th>Lección</th>
            <th>Students' Book</th>
            <th>Activity Book</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="5">Unidad 1</td>
            <td>Lección 1</td>
            <td>4 - 6</td>
            <td>66 - 69</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>7 – 8</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>9 - 10</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>11 – 12</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>13</td>
            <td>70</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 2</td>
            <td>Lección 1</td>
            <td>14 – 16</td>
            <td>71</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>17 – 18</td>
            <td>72</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>19 – 20</td>
            <td>73</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>21 – 22</td>
            <td>75</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>23</td>
            <td>-</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 3</td>
            <td>Lección 1</td>
            <td>24 – 26</td>
            <td>76</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>27 – 28</td>
            <td>77</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>29 – 30</td>
            <td>78</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>31 – 32</td>
            <td>79</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>33</td>
            <td>80</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 4</td>
            <td>Lección 1</td>
            <td>34 – 36</td>
            <td>81</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>37 – 38</td>
            <td>82</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>39 – 40</td>
            <td>83</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>41 – 42</td>
            <td>84</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>43</td>
            <td>85</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 5</td>
            <td>Lección 1</td>
            <td>44 – 46</td>
            <td>86</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>47 – 48</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>49 – 50</td>
            <td>88</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>51 – 52</td>
            <td>89</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>53</td>
            <td>90</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 6</td>
            <td>Lección 1</td>
            <td>54 – 56</td>
            <td>91</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>57 – 58</td>
            <td>92</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>59 – 60</td>
            <td>93</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>61 – 62</td>
            <td>94</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>63</td>
            <td>95</td>
        </tr>
    </tbody>
            </table>`
    },
    {
        fifthStu: `
        <h2>Class 5th - Student
        <table>
    <thead>
        <tr>
            <th>Trimestre</th>
            <th>Lección</th>
            <th>Students' Book</th>
            <th>Activity Book</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Diagnóstico</td>
            <td>-</td>
            <td>4 – 7</td>
            <td>70 – 71</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 1</td>
            <td>Lección 1</td>
            <td>8 – 10</td>
            <td>72</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>11 – 12</td>
            <td>73</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>13 – 14</td>
            <td>74 – 75</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>15 – 16</td>
            <td>76</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>17</td>
            <td>-</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 2</td>
            <td>Lección 1</td>
            <td>18 – 20</td>
            <td>77</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>21 – 22</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>23 – 24</td>
            <td>78 – 79</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>25 – 26</td>
            <td>80</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>27</td>
            <td>81</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 3</td>
            <td>Lección 1</td>
            <td>28 – 30</td>
            <td>82</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>31 – 32</td>
            <td>83</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>33 – 34</td>
            <td>84</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>35 – 36</td>
            <td>85</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>37</td>
            <td>86</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 4</td>
            <td>Lección 1</td>
            <td>38 – 40</td>
            <td>87</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>41 – 42</td>
            <td>88</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>43 – 44</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>45 – 46</td>
            <td>89</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>47</td>
            <td>90 – 91</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 5</td>
            <td>Lección 1</td>
            <td>48 – 50</td>
            <td>92</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>51 – 52</td>
            <td>93</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>53 – 54</td>
            <td>94</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>55 – 56</td>
            <td>95</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>57</td>
            <td>96</td>
        </tr>
        <tr>
            <td rowspan="5">Unidad 6</td>
            <td>Lección 1</td>
            <td>58 – 60</td>
            <td>97</td>
        </tr>
        <tr>
            <td>Lección 2</td>
            <td>61 – 62</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Lección 3</td>
            <td>63 – 64</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Lección 4</td>
            <td>65 – 66</td>
            <td>98</td>
        </tr>
        <tr>
            <td>Lección 5</td>
            <td>67</td>
            <td>99 – 101, 102</td>
        </tr>
    </tbody>
            </table>`
    }];


//Algoritmo BannerApp
const phrase = document.getElementById("#userInput");
const runApp = document.querySelector(".appButton");

runApp.addEventListener("click", () => {
    const entryText = phrase.value;
    if (entryText.value.trim() !== "") {
        let listItem = querySelector("ul");
        const chars = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];
        const lowerCaseLetters = entryText.map(elemento => elemento.toLowerCase());
        const readyToRun = justLettNum(lowerCaseLetters);
    }
}
)


function justLettNum(inputArray) {
    const letterArray = inputArray
        .join('')                                 // Unimos el array en un solo string
        .normalize("NFD")                         // Separa letras de acentos
        .replace(/[\u0300-\u036f]/g, '')          // Elimina los acentos
        .replace(/[^a-zA-Z0-9]/g, '')               // Elimina todo lo que no sea letra ni numeros
        .split('');                                 // Lo devolvemos como array de letras
    return letterArray;
}






// Lineas para renderizar las tablas
const tableToShow = document.querySelector("#chrono");
tableToShow.innerHTML = stuTable[0].fourthStu;
