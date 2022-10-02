import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlayers } from '../redux/actions';
import axios from 'axios';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import popUpStyles from '../styles/PopUpStyles.module.css';
import { Link, useLocation } from 'react-router-dom';
import * as actions from '../redux/actions'
import queryString from 'query-string'


export default function PlayerInscription() {
	const dispatch = useDispatch();

	const id = queryString.parse(useLocation().search).id

	const [selectValue, setSelectValue] = React.useState("undefined")

	React.useEffect(() => {
		dispatch(actions.getTournamentsAdmin());
		if (id) {
			setSelectValue(id)
		}
	}, [])


	let allTournaments = useSelector(state => state.tournamentsAdmin)
	let nextTournaments = allTournaments.filter(e => e.state === "Proximo")


	const handleChangeSelect = (e) => {
		e.preventDefault()
		setSelectValue(e.target.value)
	}

	//Esto controla el popUp, si esta vacio no aparece, pero si tiene algo aparece el popUp
	//Si queres usarlo setealo con el siguiente formato: {title: 'TituloPopUp', msg:'Mensaje del popUp'}
	const [popUpError, setPopUpError] = useState({});

	const [player1, setPlayer1] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});
	const [player2, setPlayer2] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});
	const [player3, setPlayer3] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});
	const [player4, setPlayer4] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});
	const [player5, setPlayer5] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});
	const [player6, setPlayer6] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});
	const [player7, setPlayer7] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});
	const [player8, setPlayer8] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});
	const [player9, setPlayer9] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});
	const [player10, setPlayer10] = React.useState({
		name: '',
		surname: '',
		dni: 0,
		tournaments: []
	});

	const [final, setFinal] = React.useState(false)

	//Estado que guardará el valor del boton checkbox

	const [compromise, setCompromise] = React.useState(false);

	const [popUp1, setPopUp1] = useState(false);
	const [popUp2, setPopUp2] = useState(false);
	const [popUp3, setPopUp3] = useState(false);
	const [popUp4, setPopUp4] = useState(false);
	const [popUp5, setPopUp5] = useState(false);
	const [popUp6, setPopUp6] = useState(false);
	const [popUp7, setPopUp7] = useState(false);
	const [popUp8, setPopUp8] = useState(false);
	const [popUp9, setPopUp9] = useState(false);
	const [popUp10, setPopUp10] = useState(false);

	const [edit1, setEdit1] = React.useState(false);
	const [edit2, setEdit2] = React.useState(false);
	const [edit3, setEdit3] = React.useState(false);
	const [edit4, setEdit4] = React.useState(false);
	const [edit5, setEdit5] = React.useState(false);
	const [edit6, setEdit6] = React.useState(false);
	const [edit7, setEdit7] = React.useState(false);
	const [edit8, setEdit8] = React.useState(false);
	const [edit9, setEdit9] = React.useState(false);
	const [edit10, setEdit10] = React.useState(false);

	const [errors1, setErrors1] = React.useState({});
	const [errors2, setErrors2] = React.useState({});
	const [errors3, setErrors3] = React.useState({});
	const [errors4, setErrors4] = React.useState({});
	const [errors5, setErrors5] = React.useState({});
	const [errors6, setErrors6] = React.useState({});
	const [errors7, setErrors7] = React.useState({});
	const [errors8, setErrors8] = React.useState({});
	const [errors9, setErrors9] = React.useState({});
	const [errors10, setErrors10] = React.useState({});
	const [errorSelect, setErrorSelect] = React.useState({});

	const [confirm1, setConfirm1] = React.useState(false);
	const [confirm2, setConfirm2] = React.useState(false);
	const [confirm3, setConfirm3] = React.useState(false);
	const [confirm4, setConfirm4] = React.useState(false);
	const [confirm5, setConfirm5] = React.useState(false);
	const [confirm6, setConfirm6] = React.useState(false);
	const [confirm7, setConfirm7] = React.useState(false);
	const [confirm8, setConfirm8] = React.useState(false);
	const [confirm9, setConfirm9] = React.useState(false);
	const [confirm10, setConfirm10] = React.useState(false);

	const [shield, setShield] = React.useState("")

	const [errorShield, setErrorShield] = React.useState("")

	const [teamName, setTeamName] = useState("")

	const [team, setTeam] = useState({
		name: "",
		players: [],
		image: "",
		tournaments: []
	});

	const [addScrub1, setAddScrub1] = useState(false)

	const [addScrub2, setAddScrub2] = useState(false)

	const [formErrors, setFormErrors] = useState({})

	const handleDisabled1 = (e) => {
		e.preventDefault()
		setEdit1(false)
	}

	const handlePopUp1 = (e) => {
		e.preventDefault()
		if (Object.values(errors1).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player1.surname.length == 0 || player1.name.length == 0 || player1.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp1(true)
		}
	}


	const handleSubmit1 = (e) => {
		e.preventDefault()
		setConfirm1(true)
		setEdit1(true)
		setPopUp1(false)
		dispatch(createPlayers(player1));
		
	}

	const handlePopUp2 = (e) => {
		e.preventDefault()
		if (Object.values(errors2).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player2.surname.length == 0 || player2.name.length == 0 || player2.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp2(true)
		}
	}


	const handleSubmit2 = (e) => {
		e.preventDefault()
		setConfirm2(true)
		setEdit2(true)
		setPopUp2(false)
		dispatch(createPlayers(player2));
		
	}

	const handlePopUp3 = (e) => {
		e.preventDefault()
		if (Object.values(errors3).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player3.surname.length == 0 || player3.name.length == 0 || player3.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp3(true)
		}
	}


	const handleSubmit3 = (e) => {
		e.preventDefault()
		setConfirm3(true)
		setEdit3(true)
		setPopUp3(false)
		dispatch(createPlayers(player3));
		
	}

	const handlePopUp4 = (e) => {
		e.preventDefault()
		if (Object.values(errors4).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player4.surname.length == 0 || player4.name.length == 0 || player4.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp4(true)
		}
	}


	const handleSubmit4 = (e) => {
		e.preventDefault()
		setConfirm4(true)
		setEdit4(true)
		setPopUp4(false)
		dispatch(createPlayers(player4));
		
	}

	const handlePopUp5 = (e) => {
		e.preventDefault()
		if (Object.values(errors5).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player5.surname.length == 0 || player5.name.length == 0 || player5.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp5(true)
		}
	}


	const handleSubmit5 = (e) => {
		e.preventDefault()
		setConfirm5(true)
		setEdit5(true)
		setPopUp5(false)
		dispatch(createPlayers(player5));
		
	}

	const handlePopUp6 = (e) => {
		e.preventDefault()
		if (Object.values(errors6).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player6.surname.length == 0 || player6.name.length == 0 || player6.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp6(true)
		}
	}


	const handleSubmit6 = (e) => {
		e.preventDefault()
		setConfirm6(true)
		setEdit6(true)
		setPopUp6(false)
		dispatch(createPlayers(player6));
		
	}

	const handlePopUp7 = (e) => {
		e.preventDefault()
		if (Object.values(errors7).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player7.surname.length == 0 || player7.name.length == 0 || player7.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp7(true)
		}
	}


	const handleSubmit7 = (e) => {
		e.preventDefault()
		setConfirm7(true)
		setEdit7(true)
		setPopUp7(false)
		dispatch(createPlayers(player7));
		
	}

	const handlePopUp8 = (e) => {
		e.preventDefault()
		if (Object.values(errors8).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player8.surname.length == 0 || player8.name.length == 0 || player8.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp8(true)
		}
	}

	const handleSubmit8 = (e) => {
		e.preventDefault()
		setConfirm8(true)
		setEdit8(true)
		setPopUp8(false)
		dispatch(createPlayers(player8));
		
	}

	const handlePopUp9 = (e) => {
		e.preventDefault()
		if (Object.values(errors9).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player9.surname.length == 0 || player9.name.length == 0 || player9.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp9(true)
			
		}
	}


	const handleSubmit9 = (e) => {
		e.preventDefault()
		setConfirm9(true)
		setEdit9(true)
		setPopUp9(false)
		dispatch(createPlayers(player9));
		
	}

	const handlePopUp10 = (e) => {
		e.preventDefault()
		if (Object.values(errors10).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, revisá los datos ingresados del jugador' })
		} else if (player10.surname.length == 0 || player10.name.length == 0 || player10.dni == 0) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, completá los campos' })
		} else {
			setPopUp10(true)
		}
	}


	const handleSubmit10 = (e) => {
		e.preventDefault()
		setConfirm10(true)
		setEdit10(true)
		setPopUp10(false)
		dispatch(createPlayers(player10));
		
	}


	const handleAddScrub1 = (e) => {
		e.preventDefault()
		setAddScrub1(true)
	}

	const handleAddScrub2 = (e) => {
		e.preventDefault()
		setAddScrub2(true)
	}

	const deleteScrub1 = (e) => {
		e.preventDefault()
		setAddScrub1(false)
	}

	const deleteScrub2 = (e) => {
		e.preventDefault()
		setAddScrub2(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!teamName) {
			setPopUpError({ title: 'Error!', msg: 'Colocale un nombre a tu equipo!' })
		} else if (Object.values(errors1).length > 0 || Object.values(errors2).length > 0 || Object.values(errors3).length > 0 || Object.values(errors4).length > 0 || Object.values(errors5).length > 0 || Object.values(errors6).length > 0 || Object.values(errors7).length > 0 || Object.values(errors8).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Faltan datos o hay datos incorrectos.' });
		} else if (Object.values(formErrors).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Faltan datos o hay datos incorrectos.' });
		} else if (errorShield) {
			setPopUpError({ title: 'Error!', msg: 'Faltan datos o hay datos incorrectos.' });
		} else if (!compromise) {
			setPopUpError({ title: 'Error!', msg: 'Por favor, lee atentamente la condicion final y tilda la casilla "Entiendo".' });
		} else if (addScrub1 && Object.values(errors9).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Faltan datos o hay datos incorrectos.' });
		} else if (addScrub2 && Object.values(errors10).length > 0) {
			setPopUpError({ title: 'Error!', msg: 'Faltan datos o hay datos incorrectos.' });
		} else {
			let selectTournament = nextTournaments.find(e => e.id == selectValue)
			let players = [player1.dni, player2.dni, player3.dni, player4.dni, player5.dni, player6.dni, player7.dni, player8.dni]
			if (player9.name.length > 0 && addScrub1) {
				players.push(player9)
			}
			if (player10.name.length > 0 && addScrub2) {
				players.push(player10)
			}
			setTeam({ ...team, name: teamName, image: shield, players: [...players], tournaments: selectTournament.name })
			setFinal(true)

		}
	};

	const handleFinal = () => {
		dispatch(actions.createTeam(team))
		console.log(team)
		setFinal(false)
	}

	const [loading, setLoading] = React.useState(1)

	const handleShield = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		let size = 0
		if (files) {
			size += files[0].size
		}
		console.log(size)
		data.append("file", files[0]);
		data.append("upload_preset", "ReservaTeams");
		setLoading(2);
		try {
			const res = await fetch(
				"https://api.cloudinary.com/v1_1/maurodavid/image/upload",
				{
					method: "POST",
					body: data,
				}
			)
			const file = await res.json();
			let array = file.secure_url.split(".")
			let format = array[array.length - 1]
			console.log(format)
			if (size > 2000000) {
				setErrorShield("El archivo es demasiado grande")
			} else {
				if (format === "jpg" || format === "png") {
					setErrorShield("")
					setShield(file.secure_url)
					setLoading(0)
				} else {
					setErrorShield("Solo se admiten archivos formato jpeg o png")
					setLoading(1)
				}
			}
		} catch (error) {
			setErrorShield("Solo se admiten archivos formato jpeg o png")
			setLoading(1)
		}
	}

	const handleChange = (e) => {
		e.preventDefault();
		setTeamName(e.target.value)
	};

	const handleError = (e) => {
		e.preventDefault();
		setFormErrors(validate(teamName))
	}

	function validate(data) {
		let errors = {}
		if (!data) {
			errors.name = 'Campo requerido'
		}
		if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data)) {
			errors.name = 'El nombre debe estar formado solo por letras'
		}
		if (data.length < 3) {
			errors.name = 'El nombre debe tener por lo menos 3 caracteres'
		}
		if (data.length >= 18) {
			errors.name = 'El nombre es demasiado largo (máx. 18 letras)'
		}
		return errors
	}

	const handleCompromiseChange = (e) => {
		setCompromise(e.target.checked == 1);
	};

	const handleChange1 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer1({
			...player1,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});

	};
	const handleChange2 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer2({
			...player2,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});
	};
	const handleChange3 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer3({
			...player3,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});
	};
	const handleChange4 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer4({
			...player4,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});
	};
	const handleChange5 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer5({
			...player5,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});
	};
	const handleChange6 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer6({
			...player6,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});
	};
	const handleChange7 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer7({
			...player7,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});
	};
	const handleChange8 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer8({
			...player8,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});
	};
	const handleChange9 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer9({
			...player9,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});
	};
	const handleChange10 = (e) => {
		e.preventDefault();
		let selectTournament = nextTournaments.find(e => e.id == selectValue)
		setPlayer10({
			...player10,
			[e.target.name]: e.target.value,
			tournaments: [selectTournament.name]
		});
	};

	const handleErrors1 = (e) => {
		setErrors1(validate1(player1));
	};
	const handleErrors2 = (e) => {
		setErrors2(validate2(player2));
	};
	const handleErrors3 = (e) => {
		setErrors3(validate3(player3));
	};
	const handleErrors4 = (e) => {
		setErrors4(validate4(player4));
	};
	const handleErrors5 = (e) => {
		setErrors5(validate5(player5));
	};
	const handleErrors6 = (e) => {
		setErrors6(validate6(player6));
	};
	const handleErrors7 = (e) => {
		setErrors7(validate7(player7));
	};
	const handleErrors8 = (e) => {
		setErrors8(validate8(player8));
	};
	const handleErrors9 = (e) => {
		setErrors9(validate9(player9));
	};
	const handleErrors10 = (e) => {
		setErrors10(validate10(player10));
	};

	const handleErrorSelect = (e) => {
		if (e.target.value === 'undefined') {
			setErrorSelect({ ...errorSelect, errorSelect: "Elige un torneo para la inscripción" })
		} else {
			setErrorSelect({})
		}
	};

	const validate1 = (data) => {
		let error = {};
		if (!data.name) {
			error.name1 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name1 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name1 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name1 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname1 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname1 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname1 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname1 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni1 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni1 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni1 = 'El dni debe tener 8 digitos';
		}

		return error;
	};
	const validate2 = (data) => {
		let error = {};
		if (!data.name) {
			error.name2 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name2 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name2 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name2 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname2 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname2 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname2 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname2 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni2 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni2 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni2 = 'El dni debe tener 8 digitos';
		}
		return error;
	};
	const validate3 = (data) => {
		let error = {};
		if (!data.name) {
			error.name3 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name3 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name3 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name3 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname3 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname3 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname3 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname3 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni3 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni3 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni3 = 'El dni debe tener 8 digitos';
		}
		return error;
	};
	const validate4 = (data) => {
		let error = {};
		if (!data.name) {
			error.name4 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name4 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name4 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name4 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname4 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname4 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname4 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname4 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni4 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni4 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni4 = 'El dni debe tener 8 digitos';
		}
		return error;
	};
	const validate5 = (data) => {
		let error = {};
		if (!data.name) {
			error.name5 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name5 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name5 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name5 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname5 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname5 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname5 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname5 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni5 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni5 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni5 = 'El dni debe tener 8 digitos';
		}
		return error;
	};
	const validate6 = (data) => {
		let error = {};
		if (!data.name) {
			error.name6 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name6 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name6 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name6 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname6 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname6 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname6 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname6 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni6 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni6 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni6 = 'El dni debe tener 8 digitos';
		}
		return error;
	};
	const validate7 = (data) => {
		let error = {};
		if (!data.name) {
			error.name7 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name7 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name7 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name7 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname7 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname7 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname7 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname7 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni7 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni7 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni7 = 'El dni debe tener 8 digitos';
		}
		return error;
	};
	const validate8 = (data) => {
		let error = {};
		if (!data.name) {
			error.name8 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name8 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name8 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name8 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname8 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname8 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname8 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname8 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni8 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni8 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni8 = 'El dni debe tener 8 digitos';
		}
		return error;
	};
	const validate9 = (data) => {
		let error = {};
		if (!data.name) {
			error.name9 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name9 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name9 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name9 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname9 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname9 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname9 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname9 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni9 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni9 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni9 = 'El dni debe tener 8 digitos';
		}
		return error;
	};
	const validate10 = (data) => {
		let error = {};
		if (!data.name) {
			error.name10 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.name)) {
			error.name10 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name10 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name10 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname10 = 'Campo requerido';
		} else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(data.surname)) {
			error.surname10 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname10 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname10 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni10 = 'Campo requerido';
		} else if (!/^[0-9]*$/.test(data.dni)) {
			error.dni10 = 'El DNI solo puede estar compuesto por números'
		} else if (data.dni.toString().length !== 8) {
			error.dni10 = 'El dni debe tener 8 digitos';
		}
		return error;
	};

	return (
		<div className='w-full min-h-screen flex flex-col justify-between'>
			<Nav />

			{/*Esto es el popUp*/}
			<div
				className={
					popUpError.title
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>

				<div className={popUpError.title ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>{popUpError.title}</h2>
					<p>{popUpError.msg}</p>
					<button
						onClick={() => setPopUpError({})}
						className={popUpStyles.okBtn}
					>
						Ok
					</button>
				</div>
			</div>

			<div
				className={
					final
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>

				<div className={final ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Estás seguro?</h2>
					<p>Si está todo bien, haz click en pagar inscripción</p>
					<button
						onClick={() => handleFinal()}
						className={popUpStyles.okBtn}
					>
						Pagar inscripción
					</button>
					<button
						onClick={() => setFinal(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>


			{/*----------PopUps de confirmacion de jugadores------------*/}


			<div
				className={
					popUp1
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp1 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?</h2>
					<p>Nombre: {player1.name}</p>
					<p>Apellido: {player1.surname}</p>
					<p>DNI: {player1.dni}</p>
					<button
						onClick={(e) => handleSubmit1(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp1(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>

			<div
				className={
					popUp2
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp2 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?</h2>
					<p>Nombre: {player2.name}</p>
					<p>Apellido: {player2.surname}</p>
					<p>DNI: {player2.dni}</p>
					<button
						onClick={(e) => handleSubmit2(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp2(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>

			<div
				className={
					popUp3
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp3 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?</h2>
					<p>Nombre: {player3.name}</p>
					<p>Apellido: {player3.surname}</p>
					<p>DNI: {player3.dni}</p>
					<button
						onClick={(e) => handleSubmit3(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp3(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>

			<div
				className={
					popUp4
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp4 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?</h2>
					<p>Nombre: {player4.name}</p>
					<p>Apellido: {player4.surname}</p>
					<p>DNI: {player4.dni}</p>
					<button
						onClick={(e) => handleSubmit4(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp4(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>

			<div
				className={
					popUp5
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp5 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?5</h2>
					<p>Nombre: {player5.name}</p>
					<p>Apellido: {player5.surname}</p>
					<p>DNI: {player5.dni}</p>
					<button
						onClick={(e) => handleSubmit5(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp5(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>

			<div
				className={
					popUp6
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp6 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?6</h2>
					<p>Nombre: {player6.name}</p>
					<p>Apellido: {player6.surname}</p>
					<p>DNI: {player6.dni}</p>
					<button
						onClick={(e) => handleSubmit6(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp6(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>

			<div
				className={
					popUp7
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp7 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?</h2>
					<p>Nombre: {player7.name}</p>
					<p>Apellido: {player7.surname}</p>
					<p>DNI: {player7.dni}</p>
					<button
						onClick={(e) => handleSubmit7(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp7(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>

			<div
				className={
					popUp8
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp8 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?</h2>
					<p>Nombre: {player8.name}</p>
					<p>Apellido: {player8.surname}</p>
					<p>DNI: {player8.dni}</p>
					<button
						onClick={(e) => handleSubmit8(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp8(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>

			<div
				className={
					popUp9
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp9 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?</h2>
					<p>Nombre: {player9.name}</p>
					<p>Apellido: {player9.surname}</p>
					<p>DNI: {player9.dni}</p>
					<button
						onClick={(e) => handleSubmit9(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp9(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>

			<div
				className={
					popUp10
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}>




				<div className={popUp10 ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>¿Están correctos los datos del jugador?10</h2>
					<p>Nombre: {player10.name}</p>
					<p>Apellido: {player10.surname}</p>
					<p>DNI: {player10.dni}</p>
					<button
						onClick={(e) => handleSubmit10(e)}
						className={popUpStyles.okBtn}
					>
						Si
					</button>
					<button
						onClick={() => setPopUp10(false)}
						className={popUpStyles.okBtn}
					>
						Revisar información
					</button>
				</div>
			</div>




			{/*----------PopUps de confirmacion de jugadores------------*/}


			<div className='min-h-screen flex flex-col items-center relative'>


				<Link to='/home'>
					<button className='absolute w-[200px] h-[70px] bg-green-500
				text-xl font-medium rounded-full left-3 top-6 text-white
				hover:scale-110 duration-300 animate-appear'>Volver</button>
				</Link>

				<h2 className='text-3xl font-bold text-green-500 mb-10 mt-24 animate-appear'>Inscribi a tu equipo</h2>

				<form className='bg-gray-100 w-5/6 flex flex-col items-center text-center min-w-[350px] animate-appear'>

					<div className='w-full flex flex-col items-center'>

						<div className='bg-gray-100 w-4/6 min-w-[330px] flex flex-col items-center'>

							<div className='w-5/6 min-h-[160px] flex flex-col justify-end items-center
					lg:flex-row lg:items-end relative lg:min-h-[120px] lg:justify-between'>





								<label className='text-2xl font-medium 
						text-green-500 mb-2'>Torneo: </label>
								<select name="tournament" value={selectValue} onChange={e => handleChangeSelect(e)} onClick={e => handleErrorSelect(e)}>
									<option value="undefined">Elegir torneo</option>
									{nextTournaments.map(e => <option value={e.id}>{e.name}</option>)}
								</select>

								<div className='absolute right-50 top-2 bg-red-600 text-white rounded-lg
						p-2 font-medium shadow shadow-black duration-500 lg:right-0 lg:top-4'
									style={errorSelect.errorSelect ? { opacity: 1 } : { opacity: 0 }}>
									<p>{errorSelect.errorSelect}</p>
								</div>

								<label className='text-2xl font-medium
						text-green-500 mb-2'>Nombre de tu equipo: </label>
								<input type="text" value={teamName} name="name"
									onChange={e => handleChange(e)} onKeyUp={e => handleError(e)}
									placeholder='Nombre del equipo'
									className="w-3/6 h-[50px] bg-gray-100 border-b border-green-500 outline-none
						pl-[10px] min-w-[300px] ml-3 text-lg text-gray-500"/>

								<div className='absolute right-50 top-2 bg-red-600 text-white rounded-lg
						p-2 font-medium shadow shadow-black duration-500 lg:right-0 lg:top-4'
									style={formErrors.name ? { opacity: 1 } : { opacity: 0 }}>
									<p>{formErrors.name}</p>
								</div>

							</div>

							<div className='w-5/6 min-h-[160px] flex flex-col justify-end items-center
					lg:flex-row lg:items-end relative lg:min-h-[120px] lg:justify-between
					mt-10'>
								<label className='text-2xl font-medium
						text-green-500 mb-2'>Escudo/bandera/imagen: </label>
								<input id='inputFile' type="file" name='image'
									onChange={e => handleShield(e)}
									className="w-3/6 h-[50px] bg-gray-100 border-b border-green-500 outline-none
						pl-[10px] min-w-[300px] ml-3 text-lg text-gray-500"/>
								<br />
								{loading === 1 ? <small>{"(opcional)"}</small> : false}

								{loading === 2 ? <p>Cargando imagen...</p> : false}
								{loading === 0 ? <img className="h-[200px]" src={shield} alt="" /> : false}
								<div className='absolute right-50 top-2 bg-red-600 text-white rounded-lg
						p-2 font-medium shadow shadow-black duration-500 lg:right-0 lg:top-4'
									style={errorShield ? { opacity: 1 } : { opacity: 0 }}>
									<p>{errorShield}</p>
								</div>
							</div>
						</div>

					</div>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<b> Por favor, completá con los datos REALES de los jugadores.</b> <br /> Recordá que los datos serán pedidos por el personal de la cancha antes de iniciar el partido.
						<br />
						<br />
						<b> A TENER EN CUENTA: </b>
						<ul>
							<li>En caso de ser extranjero y no contar con un dni argentino: Completa la casilla de dni del jugador con los primeros 8 digitos de su identificación en caso de que posea más o en caso contrario completalo con números CERO al final</li>
						</ul>
					</div>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 1</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange1(e)}
								onKeyUp={(e) => handleErrors1(e)}
								disabled={edit1}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors1.name1 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors1.name1}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange1(e)}
								onKeyUp={(e) => handleErrors1(e)}
								disabled={edit1}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors1.surname1 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors1.surname1}</p>
							</div>
						</div>
						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange1(e)}
								onKeyUp={(e) => handleErrors1(e)}
								disabled={edit1}
							></input>
							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors1.dni1 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors1.dni1}</p>
							</div>
						</div>
						<button type="submit" onClick={(e) => handlePopUp1(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>

					</div>
					{confirm1 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 2</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange2(e)}
								onKeyUp={(e) => handleErrors2(e)}
								disabled={edit2}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors2.name2 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors2.name2}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange2(e)}
								onKeyUp={(e) => handleErrors2(e)}
								disabled={edit2}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors2.surname2 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors2.surname2}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange2(e)}
								onKeyUp={(e) => handleErrors2(e)}
								disabled={edit2}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors2.dni2 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors2.dni2}</p>
							</div>
						</div>

						<button type="submit" onClick={(e) => handlePopUp2(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>


					</div> : false}

					{confirm2 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 3</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange3(e)}
								onKeyUp={(e) => handleErrors3(e)}
								disabled={edit3}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors3.name3 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors3.name3}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange3(e)}
								onKeyUp={(e) => handleErrors3(e)}
								disabled={edit3}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors3.surname3 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors3.surname3}</p>
							</div>

						</div>


						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange3(e)}
								onKeyUp={(e) => handleErrors3(e)}
								disabled={edit3}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors3.dni3 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors3.dni3}</p>
							</div>
						</div>

						<button type="submit" onClick={(e) => handlePopUp3(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>

					</div> : false}

					{confirm3 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 4</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange4(e)}
								onKeyUp={(e) => handleErrors4(e)}
								disabled={edit4}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors4.name4 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors4.name4}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange4(e)}
								onKeyUp={(e) => handleErrors4(e)}
								disabled={edit4}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors4.surname4 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors4.surname4}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange4(e)}
								onKeyUp={(e) => handleErrors4(e)}
								disabled={edit4}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors4.dni4 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors4.dni4}</p>
							</div>
						</div>

						<button type="submit" onClick={(e) => handlePopUp4(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>

					</div> : false}

					{confirm4 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 5</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange5(e)}
								onKeyUp={(e) => handleErrors5(e)}
								disabled={edit5}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors5.name5 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors5.name5}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange5(e)}
								onKeyUp={(e) => handleErrors5(e)}
								disabled={edit5}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors5.surname5 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors5.surname5}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange5(e)}
								onKeyUp={(e) => handleErrors5(e)}
								disabled={edit5}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors5.dni5 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors5.dni5}</p>
							</div>
						</div>

						<button type="submit" onClick={(e) => handlePopUp5(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>

					</div> : false}

					{confirm5 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 6</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange6(e)}
								onKeyUp={(e) => handleErrors6(e)}
								disabled={edit6}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors6.name6 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors6.name6}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange6(e)}
								onKeyUp={(e) => handleErrors6(e)}
								disabled={edit6}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors6.surname6 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors6.surname6}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange6(e)}
								onKeyUp={(e) => handleErrors6(e)}
								disabled={edit6}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors6.dni6 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors6.dni6}</p>
							</div>
						</div>

						<button type="submit" onClick={(e) => handlePopUp6(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>

					</div> : false}

					{confirm6 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 7</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange7(e)}
								onKeyUp={(e) => handleErrors7(e)}
								disabled={edit7}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors7.name7 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors7.name7}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange7(e)}
								onKeyUp={(e) => handleErrors7(e)}
								disabled={edit7}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors7.surname7 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors7.surname7}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange7(e)}
								onKeyUp={(e) => handleErrors7(e)}
								disabled={edit7}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors7.dni7 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors7.dni7}</p>
							</div>
						</div>

						<button type="submit" onClick={(e) => handlePopUp7(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>

					</div> : false}

					{confirm7 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 8</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange8(e)}
								onKeyUp={(e) => handleErrors8(e)}
								disabled={edit8}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors8.name8 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors8.name8}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange8(e)}
								onKeyUp={(e) => handleErrors8(e)}
								disabled={edit8}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors8.surname8 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors8.surname8}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange8(e)}
								onKeyUp={(e) => handleErrors8(e)}
								disabled={edit8}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors8.dni8 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors8.dni8}</p>
							</div>
						</div>

						<button type="submit" onClick={(e) => handlePopUp8(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>

					</div> : false}

					{confirm8 && !addScrub1 ? <button onClick={handleAddScrub1}>Agregar suplente (opcional)</button> : false}

					{addScrub1 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Suplente 1</h2>
						<button onClick={deleteScrub1}
							className='bg-white w-[70px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							X
						</button>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange9(e)}
								onKeyUp={(e) => handleErrors9(e)}
								disabled={edit9}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors9.name9 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors9.name9}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange9(e)}
								onKeyUp={(e) => handleErrors9(e)}
								disabled={edit9}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors9.surname9 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors9.surname9}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange9(e)}
								onKeyUp={(e) => handleErrors9(e)}
								disabled={edit9}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors9.dni9 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors9.dni9}</p>
							</div>
						</div>

						<button type="submit" onClick={(e) => handlePopUp9(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>
					</div> : false}

					{confirm9 && !addScrub2 ? <button onClick={handleAddScrub2}>Agregar suplente (opcional)</button> : false}

					{addScrub2 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Suplente 2</h2>

						<button onClick={deleteScrub2}
							className='bg-white w-[70px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							X
						</button>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange10(e)}
								onKeyUp={(e) => handleErrors10(e)}
								disabled={edit10}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors10.name10 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors10.name10}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange10(e)}
								onKeyUp={(e) => handleErrors10(e)}
								disabled={edit10}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors10.surname10 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors10.surname10}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="text"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange10(e)}
								onKeyUp={(e) => handleErrors10(e)}
								disabled={edit10}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
								style={errors10.dni10 ? { opacity: 1 } : { opacity: 0 }}>
								<p>{errors10.dni10}</p>
							</div>
						</div>

						<button type="submit" onClick={(e) => handlePopUp10(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Jugador
						</button>
					</div> : false}



					{confirm8 ? <div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3 flex items-center flex-col relative'>
						<h3>
							<b>CONDICIÓN NECESARIA</b>
						</h3>

						<p className='mt-3'>
							Todos los datos suministrados deben ser <b>VERIDICOS</b>. En caso de que
							los datos no sean comprobables o incorrectos al momento de arrancar
							el partido, el equipo quedará <b>DESCALIFICADO.</b>
						</p>
						<div className='flex mt-6'>
							<input
								type="checkbox"
								name="compromise"
								className='w-[30px]'
								value={compromise}
								onChange={(e) => handleCompromiseChange(e)}
							/>
							<p className='ml-1 font-medium text-lg'>Entiendo y acepto las condiciones.</p>
						</div>

						<button type="submit" onClick={e => handleSubmit(e)}
							className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar Equipo
						</button>
					</div> : false}

					<div>

					</div>

				</form>

			</div>

			<Footer />
		</div>
	);
}

