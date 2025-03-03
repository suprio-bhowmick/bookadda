<?php
require("header.php");

if (isset($_POST['promote'])) {

    $newClass = $_POST['newClass'];


    $a = 0;
    foreach ($_POST['checkBox'] as $x => $value) {
        $newRoll = $_POST['roll_' . $value];
        $newSec = $_POST['section_' . $value];
        $name = $_POST['student_name_' . $value];
        $gaurdian_name = $_POST['gaurdian_name' . $value];
        $blood = $_POST['blood_' . $value];
        $mobile = $_POST['mobile_' . $value];
        $dob = $_POST['dob_' . $value];
        $student_img_old = $_POST['student_img_old_' . $value];

        if (isset($_FILES['student_img_' . $value]) && $_FILES['student_img_' . $value]['error'] === 0) {
            $student_img = $student['student_id'] . time() . ".png";
            
            if (move_uploaded_file($_FILES['student_img_' . $value]['tmp_name'], "student_image/" . $student_img)) {
                if (!empty($student_img_old) && file_exists("student_image/" . $student_img_old)) {
                    unlink("student_image/" . $student_img_old);
                }
            }
        } else {
            $student_img = $student_img_old;
        }
        
        $update = mysqli_query($con, "UPDATE `student` SET `class` = '$newClass',`section` = '$newSec', `session` = '{$schoolInfo['session']}', roll = '$newRoll', student_name = '$name', gaurdian_name = '$gaurdian_name', blood = '$blood', mobile = '$mobile', dob = '$dob', `added_on` = '$currentTime', `student_img` = '$student_img' WHERE `student`.`id` = $value;");
        $a++;
    }

    echo "<script>Swal.fire('Successful','$a Students Promoted','success').then(function(){window.location.href=window.location.href})</script>";
    // echo "<script>Swal.fire('Successful','$a Students Promoted','success')</script>";
}


if (isset($_POST['submit'])) {
    $session = $_POST['session'];
    $class = $_POST['class'];
    $section = $_POST['section'];

    $_SESSION['session3'] = $session;
    $_SESSION['class3'] = $class;
    $_SESSION['section3'] = $section;
}

if (isset($_SESSION['session3'])) {

    $session = $_SESSION['session3'];
    $class = $_SESSION['class3'];
    $section = $_SESSION['section3'];


    if ($class != '') {
        $clsQry = " AND `class` = '$class'";
    } else {
        $clsQry = '';
    }

    if ($section != '') {
        $secQry = " AND `section` = '$section'";
    } else {
        $secQry = '';
    }

    $qry = mysqli_query($con, "SELECT * FROM `student` WHERE `school_id` = '{$_SESSION['school_id']}' AND `session` = '$session' $clsQry $secQry ORDER BY roll REGEXP '^[0-9]' DESC, length(roll  + 0), roll");
}

?>
<style>
    td,
    th {
        white-space: nowrap;

    }

    .form-check-input {
        position: absolute;
        margin-top: 0.3rem;
        margin-left: -5px;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    .student_card label {
        margin-bottom: 0;
        font-size: 15px;
    }

    .student_card .card, .searchStudent {
        height: 100%;
        box-shadow: 0px 4px 8px -1px #d7d0d0;
    }
    .student_card .card-header{
        cursor: pointer;
    }
</style>
<div class="card">
    <div class="card-body">
        <form method="POST">
            <div class="row">
                <div class="col-md-3">
                    <input type="text" placeholder="Session" class="form-control" name="session" required>
                </div>
                <div class="col-md-3">
                    <select name="class" id="" class="form-control" required>
                        <option value="">Select Class</option>
                        <option value="P.N">P.N</option>
                        <option value="LOWER">LOWER </option>
                        <option value="UPPER">UPPER </option>
                        <option value="K.G">K.G </option>
                        <option value="PP">0 </option>
                        <option value="I">Class I</option>
                        <option value="II">Class II</option>
                        <option value="III">Class III</option>
                        <option value="IV">Class IV</option>
                        <option value="V">Class V</option>
                        <option value="VI">Class VI</option>
                        <option value="VII">Class VII</option>
                        <option value="VIII">Class VIII</option>
                        <option value="IX">Class IX</option>
                        <option value="X">Class X</option>
                        <option value="XI">Class XI</option>
                        <option value="XII">Class XII</option>
                    </select>
                </div>

                <div class="col-md-3">
                    <input type="text" placeholder="Section" class="form-control" name="section">
                </div>
                <div class="col-md-3">
                    <input type="submit" class="btn btn-primary w-100" name="submit" value="Submit">
                </div>

            </div>
        </form>
    </div>
</div>
<?php
if (isset($_SESSION['session3'])) {

?>
    <div class="card">
        <div class="card-body">
            <form method="POST" enctype="multipart/form-data">

                <div class="d-flex justify-content-between">
                    <h5>Promotion Student </h5>
                    <div>

                        <h5>New Session : <?= $schoolInfo['session'] ?></h5>
                        <h5>Old Session : <?= $_SESSION['session3'] ?></h5>
                        <h5>Current Class : <?= $_SESSION['class3'] ?></h5>

                    </div>
                </div>
                <hr>
                <!-- Search Bar -->
                <div class="card searchStudent">
                    <div class="card-body ">
                        <input type="text" id="searchStudent" class="form-control" placeholder="Search Student by ID or Name">
                    </div>
                </div>
                <div class="row student_card">


                    <?php
                    $i = 1;
                    while ($row = mysqli_fetch_assoc($qry)) {
                    ?>
                        <div class="col-6 single_card my-2">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                        <p><?= $row['student_id'] ?> (<?= $row['student_name'] ?>) </p>

                                        <p><input class="form-check-input" name="checkBox[]" type="checkbox" value="<?= $row['id'] ?>"></p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-3">
                                            <img class="img-fluid" src="student_image/<?= $row['student_img'] ?>" />
                                            <div class="text-center">
                                                <p>Old Roll : <?= $row['roll'] ?></p>
                                            </div>
                                        </div>
                                        <div class="col-9">
                                            <div class="row">
                                                <div class="col-6 my-1">
                                                    <div>
                                                        <label>Student Name</label>
                                                        <input type="text" class="form-control" name="student_name_<?= $row['id'] ?>" placeholder="Student Name" value="<?= $row['student_name'] ?>" />
                                                    </div>
                                                </div>
                                                <div class="col-6 my-1">
                                                    <div>
                                                        <label>Guardian Name</label>
                                                        <input type="text" class="form-control" name="gaurdian_name<?= $row['id'] ?>" placeholder="Guardian Name" value="<?= $row['student_name'] ?>" />
                                                    </div>
                                                </div>
                                                <div class="col-4 my-1">
                                                    <div>
                                                        <label>New Roll</label>
                                                        <input type="text" class="form-control" name="roll_<?= $row['id'] ?>" placeholder="Student Name" value="<?= $row['roll'] ?>" />
                                                    </div>
                                                </div>
                                                <div class="col-4 my-1">
                                                    <div>
                                                        <label>New Section</label>
                                                        <input type="text" class="form-control" name="section_<?= $row['id'] ?>" placeholder="New Section" value="<?= $row['section'] ?>" />
                                                    </div>
                                                </div>
                                                <div class="col-4 my-1">
                                                    <div>
                                                        <label>Blood Group</label>
                                                        <input type="text" class="form-control" name="blood_<?= $row['id'] ?>" placeholder="Blood Group" value="<?= $row['blood'] ?>" />
                                                    </div>
                                                </div>


                                                <div class="col-4 my-1">
                                                    <div>
                                                        <label>Mobile Number</label>
                                                        <input type="text" class="form-control" name="mobile_<?= $row['id'] ?>" placeholder="Mobile Number" value="<?= $row['mobile'] ?>" />
                                                    </div>
                                                </div>
                                                <div class="col-4 my-1">
                                                    <div>
                                                        <label>Date of Birth</label>
                                                        <input type="date" class="form-control" name="dob_<?= $row['id'] ?>" placeholder="Father Name" value="<?= $row['dob'] ?>" />
                                                    </div>
                                                </div>
                                                <div class="col-4 my-1">
                                                    <div>
                                                        <label>Student Photo</label>
                                                        <input type="file" class="form-control" name="student_img_<?= $row['id'] ?>" />
                                                        <input type="hidden" class="form-control" name="student_img_old_<?= $row['id'] ?>" value="<?= $row['student_img'] ?>" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <?php
                        $i++;
                    }
                    ?>


                </div>
                <div class="d-flex justify-content-between ">

                    <select name="newClass" id="" class="form-control mt-5 mr-2" required>
                        <option value="">Select New Class</option>
                        <option value="P.N">P.N</option>
                        <option value="LOWER">LOWER </option>
                        <option value="UPPER">UPPER </option>
                        <option value="K.G">K.G </option>
                        <option value="PP">0 </option>
                        <option value="I">Class I</option>
                        <option value="II">Class II</option>
                        <option value="III">Class III</option>
                        <option value="IV">Class IV</option>
                        <option value="V">Class V</option>
                        <option value="VI">Class VI</option>
                        <option value="VII">Class VII</option>
                        <option value="VIII">Class VIII</option>
                        <option value="IX">Class IX</option>
                        <option value="X">Class X</option>
                        <option value="XI">Class XI</option>
                        <option value="XII">Class XII</option>
                    </select>

                    <input type="submit" name="promote" value="Promote" class="btn btn-primary mt-5">

                </div>
            </form>

        </div>
    </div>

<?php
}
?>





<?php
require("footer.php");
?>


<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Search Functionality
        document.getElementById("searchStudent").addEventListener("keyup", function() {
            let filter = this.value.toLowerCase();
            let studentCards = document.querySelectorAll(".student_card .single_card");

            studentCards.forEach(card => {
                let studentInfo = card.innerText.toLowerCase();
                if (studentInfo.includes(filter)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });

        // Live Image Preview
        document.querySelectorAll("input[name='student_img[]']").forEach(input => {
            input.addEventListener("change", function(event) {
                let reader = new FileReader();
                let imgElement = this.closest(".card").querySelector("img");

                reader.onload = function(e) {
                    imgElement.src = e.target.result;
                };

                if (event.target.files.length > 0) {
                    reader.readAsDataURL(event.target.files[0]);
                }
            });
        });

        // Checkbox Toggle on Header Click
        document.querySelectorAll(".card-header").forEach(header => {
            header.addEventListener("click", function(event) {
                if (!event.target.classList.contains("form-check-input")) { // Prevent double toggle
                    let checkbox = this.querySelector(".form-check-input");
                    if (checkbox) {
                        checkbox.checked = !checkbox.checked;
                        updateCardBorder(checkbox);
                    }
                }
            });
        });

        // Highlight selected cards
        document.querySelectorAll(".form-check-input").forEach(checkbox => {
            checkbox.addEventListener("change", function() {
                updateCardBorder(this);
            });
        });

        // Function to update border color
        function updateCardBorder(checkbox) {
            let card = checkbox.closest(".card");

            if (checkbox.checked) {
                card.style.border = "2px solid #ff9a32"; // Highlight with orange border
            } else {
                card.style.border = "1px solid #d7d0d0"; // Reset to default
            }
        }
    });
</script>