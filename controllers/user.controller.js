const {getAllUsersService, getUsersByIdService, createUserService, editUserService, deleteUserService, getBannedUsersService, getActiveUsersService, getAdminUsersService} = require ('../services/user.service')



const getAllUsers = async (req, res) => {
try {
  const resp = await getAllUsersService();
  res.status(200).json(resp);
} catch (error) {
  res.status(500).json(error.message)
}
};

const getAdminUsers = async (req, res) => {
  try {
    const resp = await getAdminUsersService();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getBannedUsers = async (req, res) => {
  try {
    const resp = await getBannedUsersService();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getActiveUsers = async (req, res) => {
  try {
    const resp = await getActiveUsersService();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserById = async (req, res) => {
 try {
   const { id } = req.params;
   const resp = await getUsersByIdService(id);
   if (!resp) {
     res.status(404).json('ID de usuario inexistente');
     return
   }
   res.status(200).json(resp);
 } catch (error) {
    res.status(500).json(error.message)
 }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const resp = await createUserService(userData);
    res.status(201).json(resp)
  } catch (error) {
    res.status(500).json(error.message);   
  }
};
 
const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const resp = await editUserService(id, userData);
     if (!resp) {
       res.status(404).json("ID de usuario inexistente");
       return;
     }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);    
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await deleteUserService(id);
     if (!resp) {
       res.status(404).json("ID de usuario inexistente");
       return;
     }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const disableUser = async (req, res) => {
  try {
    const { id } = req.params;
    const disabledTrue = { disabled: true }
    const resp = await editUserService(id, disabledTrue);
    if (!resp) {
      res.status(404).json("ID de usuario inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const unbanUser = async (req, res) => {
  try {
    const { id } = req.params;
    const disabledFalse = { disabled: false };
    const resp = await editUserService(id, disabledFalse);
    if (!resp) {
      res.status(404).json("ID de usuario inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const adminUser = async (req, res) => {
  try {
    const { id } = req.params;
    const adminMaker = { role: 'admin' };
    const resp = await editUserService(id, adminMaker);
    if (!resp) {
      res.status(404).json("ID de usuario inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  disableUser,
  adminUser,
  unbanUser,
  getActiveUsers,
  getBannedUsers,
  getAdminUsers
}