const { rombel } = require("../../models");

exports.getRombels = async (request, response) => {
  try {
    const rombels = await rombel.findAll();

    return response.send({
      status: "success",
      message: "Rombels data successfully received",
      data: {
        rombels,
      },
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send({
      status: "server error",
      message: "Server error",
    });
  }
};

exports.postRombel = async (request, response) => {
  const createRombel = await rombel.create({
    kodeRombel: request.body.kodeRombel,
    namaRombel: request.body.namaRombel,
    jumlahSiswa: request.body.jumlahSiswa,
  });

  return response.send({
    status: "success",
    message: "Rombel data successfully created",
    data: {
      rombel: createRombel,
    },
  });
};

exports.editRombel = async (request, response) => {
  const id = request.params.id;

  const findRombel = await rombel.findOne({
    where: {
      id: id,
    },
  });

  //jika idnya tidak ada makan kirim response data tidak ketemu
  if (!findRombel) {
    return response.send({
      status: "success",
      message: "Rombel data has not found",
      data: {
        rombel: null,
      },
    });
  }

  //jika data dengan id ada
  await rombel.update(request.body, {
    where: {
      id: id,
    },
  });

  const updatedRombel = await rombel.findOne({
    where: {
      id: id,
    },
  });

  return response.send({
    status: "success",
    message: "Rombel data successfully updated",
    data: {
      rombel: updatedRombel,
    },
  });
};

exports.deleteRombel = async (request, response) => {
  const id = request.params.id;

  const findRombel = await rombel.findOne({
    where: {
      id: id,
    },
  });

  //jika idnya tidak ada makan kirim response data tidak ketemu
  if (!findRombel) {
    return response.send({
      status: "success",
      message: "Rombel data has not found",
      data: {
        rombel: null,
      },
    });
  }

  await rombel.destroy({
    where: {
      id: id,
    },
  });

  return response.send({
    status: "success",
    message: `Rombel data with id: ${id} successfully deleted`,
    data: {
      rombel: null,
    },
  });
};
