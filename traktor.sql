--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-05-16 17:53:16

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 8 (class 2615 OID 16397)
-- Name: pgagent; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA pgagent;


ALTER SCHEMA pgagent OWNER TO postgres;

--
-- TOC entry 4983 (class 0 OID 0)
-- Dependencies: 8
-- Name: SCHEMA pgagent; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA pgagent IS 'pgAgent system tables';


--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 4984 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


--
-- TOC entry 3 (class 3079 OID 16398)
-- Name: pgagent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgagent WITH SCHEMA pgagent;


--
-- TOC entry 4985 (class 0 OID 0)
-- Dependencies: 3
-- Name: EXTENSION pgagent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgagent IS 'A PostgreSQL job scheduler';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 238 (class 1259 OID 16583)
-- Name: mentors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mentors (
    mentor_id integer NOT NULL,
    mentor_logo bytea,
    mentor_description character varying(100),
    mentor_experience character varying(10),
    mentor_area_expertise character varying(20),
    mentor_current_designation character varying(20),
    mentor_insti character varying(40),
    mentor_qualification character varying(20),
    mentor_year_of_passing character varying(20),
    mentor_starup_associated character varying(35),
    mentor_contact_number character varying(15),
    mentor_email character varying(30),
    mentor_linkedin character varying(60),
    mentor_password character varying(20),
    created_at timestamp without time zone
);


ALTER TABLE public.mentors OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16593)
-- Name: resume_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resume_data (
    resume_name character varying(25),
    resume_email character varying(30) NOT NULL,
    college_data character varying(50),
    college_department character varying(20),
    resume_url character varying(150),
    resume_year integer,
    created_at timestamp without time zone
);


ALTER TABLE public.resume_data OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16565)
-- Name: user_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_data (
    user_id integer NOT NULL,
    user_mail character varying(50),
    user_password character varying(30),
    user_hash character varying(40),
    user_department character varying(20),
    user_role integer NOT NULL,
    created_at timestamp with time zone,
    user_name character varying(30) DEFAULT 'Nandhini K S'::character varying NOT NULL,
    user_contact character varying(20) DEFAULT '7092311114'::character varying NOT NULL,
    personal_email character varying(30) DEFAULT 'nandhini.ramu@gmail.com'::character varying NOT NULL
);


ALTER TABLE public.user_data OWNER TO postgres;

--
-- TOC entry 4747 (class 0 OID 16399)
-- Dependencies: 222
-- Data for Name: pga_jobagent; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobagent (jagpid, jaglogintime, jagstation) FROM stdin;
8000	2024-05-16 10:52:19.071405+05:30	EliteBook
\.


--
-- TOC entry 4748 (class 0 OID 16408)
-- Dependencies: 224
-- Data for Name: pga_jobclass; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobclass (jclid, jclname) FROM stdin;
\.


--
-- TOC entry 4749 (class 0 OID 16418)
-- Dependencies: 226
-- Data for Name: pga_job; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_job (jobid, jobjclid, jobname, jobdesc, jobhostagent, jobenabled, jobcreated, jobchanged, jobagentid, jobnextrun, joblastrun) FROM stdin;
\.


--
-- TOC entry 4751 (class 0 OID 16466)
-- Dependencies: 230
-- Data for Name: pga_schedule; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_schedule (jscid, jscjobid, jscname, jscdesc, jscenabled, jscstart, jscend, jscminutes, jschours, jscweekdays, jscmonthdays, jscmonths) FROM stdin;
\.


--
-- TOC entry 4752 (class 0 OID 16494)
-- Dependencies: 232
-- Data for Name: pga_exception; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_exception (jexid, jexscid, jexdate, jextime) FROM stdin;
\.


--
-- TOC entry 4753 (class 0 OID 16508)
-- Dependencies: 234
-- Data for Name: pga_joblog; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_joblog (jlgid, jlgjobid, jlgstatus, jlgstart, jlgduration) FROM stdin;
\.


--
-- TOC entry 4750 (class 0 OID 16442)
-- Dependencies: 228
-- Data for Name: pga_jobstep; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobstep (jstid, jstjobid, jstname, jstdesc, jstenabled, jstkind, jstcode, jstconnstr, jstdbname, jstonerror, jscnextrun) FROM stdin;
\.


--
-- TOC entry 4754 (class 0 OID 16524)
-- Dependencies: 236
-- Data for Name: pga_jobsteplog; Type: TABLE DATA; Schema: pgagent; Owner: postgres
--

COPY pgagent.pga_jobsteplog (jslid, jsljlgid, jsljstid, jslstatus, jslresult, jslstart, jslduration, jsloutput) FROM stdin;
\.


--
-- TOC entry 4976 (class 0 OID 16583)
-- Dependencies: 238
-- Data for Name: mentors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mentors (mentor_id, mentor_logo, mentor_description, mentor_experience, mentor_area_expertise, mentor_current_designation, mentor_insti, mentor_qualification, mentor_year_of_passing, mentor_starup_associated, mentor_contact_number, mentor_email, mentor_linkedin, mentor_password, created_at) FROM stdin;
4321	\\x69333239392e2f6c6b692e6a7067	-	10+	Management	Associate Prof	IITM	Phd	2007	Grow your farm	9962383309	sath@gmail.com	NULL	Nirmaan123	2024-05-03 16:48:40.432112
\.


--
-- TOC entry 4977 (class 0 OID 16593)
-- Dependencies: 239
-- Data for Name: resume_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resume_data (resume_name, resume_email, college_data, college_department, resume_url, resume_year, created_at) FROM stdin;
Shayno Beryl	shaynoberyl2302@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/1000062794.png	2	\N
Karthik	karthiksiky@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/CV.pdf	2	\N
Aswin K	k.ashwin.2603@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Aswin's+Resume+(7).pdf	2	\N
Chandra sekaran S	scsvr2004@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Chandra+Sekaran+Resume.pdf	2	\N
Chandrakiran G	gchandrakiran97@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Chandrakiran+G+Resume.pdf	2	\N
Abirami	abiabiramie12@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Clean+and+Minimal+Graphic+Design+Resume+CV+Template++(2)+(1).pdf	2	\N
Divya Lakshmi	divyalakshmiananthan@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/DIVYA+NEW+RESUME.pdf	2	\N
Navitha M	Navithanavitha342@gmail.com	St. Joseph's Institute of Technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/DOC-20240326-WA0003_.pdf	2	\N
Dwani.k	dwaniham04@gmail.com	St. Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/dwani+st+josephs+institute+of+technology+resume.pdf	2	\N
Ubadulla R	ubadulla125@gmail.com	St. Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Grey+Clean+CV+Resume+Photo.pdf	2	\N
LAKSHMI PRIYA R	rajeshkumarc127@gmail.com	St.Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/LAKSHMI+PRIYA+RESUME.docx	2	\N
IMMAN	mmanfrk23@gmail.com	St.Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Imman+F.pdf	2	\N
Soundariya B	soundarsoundariya@gmail.com	St.Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Minimalist+White+and+Grey+Professional+Resume.jpg	2	\N
Shobanasri S	shobanasri.s2005@gmail.com	St.Joseph's Institute of technology	ECE	https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Minimalist+Grey+and+White+Professional+Resume_20240506_192701_0000.png	2	\N
\.


--
-- TOC entry 4975 (class 0 OID 16565)
-- Dependencies: 237
-- Data for Name: user_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_data (user_id, user_mail, user_password, user_hash, user_department, user_role, created_at, user_name, user_contact, personal_email) FROM stdin;
250420241	manager.ie@imail.iitm.ac.in	qwerty223344	bwesubaoxjnxidydgwj+:+	MANAGEMENT	2	2024-04-25 17:26:37.221773+05:30	Nandhini K S	7092311114	nandhini.ramu@gmail.com
24080503	test@gmail.com	data@gmail.com	m76ii1t$3sh-+yUaai+=	student	5	2024-05-08 11:16:45.016111+05:30	test	9677293620	test@yahoo.com
\.


--
-- TOC entry 4827 (class 2606 OID 16592)
-- Name: mentors mentors_mentor_contact_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT mentors_mentor_contact_number_key UNIQUE (mentor_contact_number);


--
-- TOC entry 4829 (class 2606 OID 16589)
-- Name: mentors mentors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mentors
    ADD CONSTRAINT mentors_pkey PRIMARY KEY (mentor_id);


--
-- TOC entry 4831 (class 2606 OID 16597)
-- Name: resume_data resume_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resume_data
    ADD CONSTRAINT resume_data_pkey PRIMARY KEY (resume_email);


--
-- TOC entry 4823 (class 2606 OID 16569)
-- Name: user_data user_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_pkey PRIMARY KEY (user_id);


--
-- TOC entry 4825 (class 2606 OID 16571)
-- Name: user_data user_data_user_mail_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_user_mail_key UNIQUE (user_mail);


-- Completed on 2024-05-16 17:53:20

--
-- PostgreSQL database dump complete
--

