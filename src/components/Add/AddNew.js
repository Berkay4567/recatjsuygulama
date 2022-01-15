import React,{ useState} from 'react';
import { Link } from "react-router-dom";
const AddNew=()=>{
	let url = `https://5fc9346b2af77700165ae514.mockapi.io/simpsons`;
	
	//---Tanımlar----
	const[name,setName]=useState("");
	const[job,setJob]=useState("");
	const[about,setAbout]=useState("");
	const[avatar,setAvatar]=useState("");
	//---------------

    return(
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new Simpsons</h1>
				<form>
					<div className="form-group">
						<label>Name Surname:</label>
						<input
							type="name"
							className="form-control"
							placeholder="Full Name"
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Job Title:</label>
						<input
							type="job"
							className="form-control"
							placeholder="Enter job title"
							onChange={e => setJob(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>About Him/Her:</label>
						<input
							type="about"
							className="form-control"
							placeholder="Enter about him/her"
							onChange={e => setAbout(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Image Link</label>
						<input
							type="img"
							className="form-control"
							placeholder="Enter image link"
							onChange={e => setAvatar(e.target.value)}
						/>
					</div>
                    <br/>
					<Link to={"/"}>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={()=>ekle(name, job, about, avatar)}
						>
							Add Character
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/" >
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>

    )
	//------------------EKLEME KOMUTU-----------------------
	function ekle(name, job, about, avatar){
		try{
			return fetch(url,{
				method:"post",
				headers:{"Content-type": "application/json"},
				body: JSON.stringify({
					name:name,
					job:job,
					about:about,
					avatar:avatar
				})
			})
			.then(response => response.json())
			.then(data => {
				console.log("data",data)
	
			})
			
	
		}
		catch(err){
			console.log(err);
		}
	}
	//------------------EKLEME KOMUTU BİTİMİ------------------
}

export default AddNew