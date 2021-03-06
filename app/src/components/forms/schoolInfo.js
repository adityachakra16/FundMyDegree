import React, { useEffect, useState } from "react";
import { customStyles } from "../constants.js";
import Select from "react-select";

const SchoolInfo = (props) => {
  return (
    <div>
      <div className="flex flex-row text-left text-bold text-3xl ">
        Which school are you going to?
      </div>
      <div className="flex flex-row mt-12">
        <div className="flex flex-col w-1/2 mr-8">
          <div className="ml-2 flex flex-row text-sm">School Name</div>

          <Select
            autoFocus
            value={props.school}
            options={props.schoolOptions}
            classNamePrefix="select"
            styles={customStyles}
            className="mt-1 flex-1 border-1 rounded-xl border-black w-full bg-white"
            onChange={(schoolOption) => props.setSchool(schoolOption)}
          />
        </div>
      </div>

      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">Degree</div>

          <Select
            autoFocus
            value={props.degree}
            options={props.degreeOptions}
            classNamePrefix="select"
            styles={customStyles}
            className="mt-1 flex-1 border-1 rounded-xl border-black w-full bg-white"
            onChange={(degreeOption) => props.setDegree(degreeOption)}
          />
        </div>

        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">Major</div>

          <Select
            autoFocus
            value={props.major}
            options={props.majorOptions}
            classNamePrefix="select"
            styles={customStyles}
            className="mt-1 flex-1 border-1 rounded-xl border-black w-full bg-white"
            onChange={(majorOption) => props.setMajor(majorOption)}
          />
        </div>
      </div>

      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">Enrollment Year</div>

          <input
            type="number"
            min="2018"
            max="2030"
            step="1"
            value={props.year}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
            onChange={(evt) => props.setYear(evt.target.value)}
          ></input>
        </div>
      </div>

      <div className="flex flex-row mt-8">
        <div className="flex flex-col w-1/4 mr-8">
          <div className="flex flex-row text-sm">School email</div>

          <input
            value={props.email}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
            onChange={(evt) => props.setEmail(evt.target.value)}
          ></input>
        </div>
        <div className="flex flex-col w-1/4 mr-8">
          <div className="ml-2 flex flex-row text-sm">Student Id</div>

          <input
            value={props.studentId}
            autoFocus
            className="mt-1 flex-1 p-2 bg-transparent outline-none w-full border-1 border-black rounded-xl items-left bg-white"
            onChange={(evt) => props.setStudentId(evt.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfo;
