import React,{useState} from 'react';
import PageHeader from '../../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import useTable from '../../components/useTable';
import * as registerServices from '../../services/registerServices';
import {Controls} from '../../components/controls/Controls';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/Popup';
import RegisterForm from './RegisterForm';
import Notification from '../../components/Notification';
import ConfirmDialog from '../../components/ConfirmDialog';

const useStyles = makeStyles(theme =>({
    pageContent:{
      margin: theme.spacing(2),
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      boxShadow:'1px 1px 3px #ccc',
      border:'solid 1px #0EE5A3',
    },
    searchInput:{
        width:'75%'
    },
    searchToolbar:{
        paddingLeft:'0px',
        paddingRight:'0px'
    },
    newButton:{
        position:'absolute',
        right:'0px',
    }
}));

const headCells = [
    {id:'firstName', label:'First Name'},
    {id:'lastName', label:'Last Name'},
    {id:'email', label:'Email'},
    {id:'industry', label:'Industry'},
    {id:'actions', label:'Actions', disableSorting:true},
];

export default function ViewUsers() {

    const classes = useStyles();
    const [records, setRecords ] = useState(registerServices.getAllUsers);
    const [filterFn, setFilterFn] = useState({fn:items => {return items}});
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({isOpen:false, message:'', type:''});
    const [confirmDialog, setConfirmDialog] = useState({isOpen:false,   title:"", subTitle:""})

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting,
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x=>x.email.includes(target.value))
            }
        })
    }

    const addOrEdit = (user, resetForm)=>{
        if(user.id ===0)
            registerServices.insertUser(user)
            else
            registerServices.updateUser(user)

            resetForm();
            setRecordForEdit(null);
            setOpenPopup(false);
            setRecords( registerServices.getAllUsers() );
            setNotify({
                isOpen:true,
                message:'Submitted Successfully',
                type:'success'
            });
    }

    const openInPopup = item =>{
        setRecordForEdit(item);
        setOpenPopup(true);
    }

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen:false,
        });
        registerServices.deleteUser(id);
        setRecords( registerServices.getAllUsers() );
        setNotify({
            isOpen:true,
            message:"Record Deleted Successfully",
            type:'error'
        });

    }
 
    return (
        <>
        <PageHeader 
        title = "Logomation Users [Admin Page]"
        subTitle = "View and manage users"
        icon = {<PeopleOutlineIcon fontSize="large" />}
       />

        <Paper className={classes.pageContent}>
            <Toolbar className={classes.searchToolbar}>
                <Controls.Input
                    label="Search users by email"
                    InputProps={
                        {
                            startAdornment:(<InputAdornment position="start">
                                                <Search />
                                            </InputAdornment>)
                        }
                    }
                    className={classes.searchInput}
                    onChange = {handleSearch} 
                />
                <Controls.Button
                    text="Add User"
                    variant="outlined"
                    startIcon={<AddIcon />}
                    className={classes.newButton}
                    onClick={()=>{setOpenPopup(true); setRecordForEdit(null);}}
                />
            </Toolbar>
          <TblContainer>
              <TblHead />
              <TableBody>
                {
                    recordsAfterPagingAndSorting().map(item=>(
                        <TableRow key={item.id}>
                            <TableCell>{item.firstName}</TableCell>
                            <TableCell>{item.lastName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.industryTitle}</TableCell>
                            <TableCell>
                                <Controls.ActionButton
                                    color="primary"
                                    onClick = {()=>{openInPopup(item)}}
                                >
                                    <EditOutlinedIcon fontSize="small" />
                                </Controls.ActionButton>

                                <Controls.ActionButton
                                    color="secondary"
                                    onClick={()=>{
                                        //onDelete(item.id)
                                        setConfirmDialog({
                                            isOpen:true,
                                            title:"Are you sure you want to delete this record ?",
                                            subTitle:"This action will permanantly delete this record. You can't undo this record once deleted.",
                                            onConfirm:()=>{ onDelete(item.id) }
                                        })
                                    }}
                                >
                                    <DeleteForeverIcon fontSize="small" />
                                </Controls.ActionButton>
                            </TableCell>
                        </TableRow>
                    ))
                }
              </TableBody>
          </TblContainer>
          <TblPagination/>
        </Paper>
                
        <Popup
            openPopup = {openPopup}
            setOpenPopup = {setOpenPopup}
            title="Add new user"
        >
            <RegisterForm
                addOrEdit={addOrEdit}
                recordForEdit={recordForEdit}
            />
        </Popup>

        <Notification
            notify={notify}
            setNotify={setNotify}
        />

        <ConfirmDialog 
            confirmDialog = {confirmDialog}
            setConfirmDialog = {setConfirmDialog}
        />
            
        </>
    )
}