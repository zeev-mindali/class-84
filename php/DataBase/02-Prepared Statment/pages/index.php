<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="../controller-layer/donations-controller.php" method="post">
        <h2>add donation</h2>
        <label>name:</label>
        <input type="text" name="name" />

        <label>family</label>
        <input type="test" name="family" />

        <label>sum</label>
        <input type="text" name="sum" />

        <label>tel</label>
        <input type="text" name="tel" />

        <label>memo</label>
        <input type="text" name="memo" />

        <label>payment type</label>
        <select name="payment_type">
            <?php
            require_once '../business-logic-layer/donations-logic.php';
            $donationType = getAllPayments();
            foreach ($donationType as $item) {
                echo "<option value='$item->id'>$item->payment</option>";
            }
            ?>

        </select>
        <input type="hidden" name="command" value="insert" />

        <button>add</button>
    </form>
    <hr />
    <form action="../controller-layer/donations-controller.php" method="post">
        <h2>Update donation</h2>
        <br />

        <select name="id">
            <?php
            require_once '../business-logic-layer/donations-logic.php';
            $donationType = getAllDonation();
            foreach ($donationType as $item) {
                echo "<option value='$item->id'>$item->payment</option>";
            }
            ?>
        </select>

        <label>name:</label>
        <input type="text" name="name" />

        <label>family</label>
        <input type="test" name="family" />

        <label>sum</label>
        <input type="text" name="sum" />

        <label>tel</label>
        <input type="text" name="tel" />

        <label>memo</label>
        <input type="text" name="memo" />

        <label>payment type</label>
        <select name="payment_type">
            <?php
            require_once '../business-logic-layer/donations-logic.php';
            $donationType = getAllPayments();
            foreach ($donationType as $item) {
                echo "<option value='$item->id'>$item->payment</option>";
            }
            ?>

        </select>

        <input type="hidden" name="command" value="update" />

        <button>Update</button>
    </form>
    <hr />
    <form action="../controller-layer/donations-controller.php" method="post">
        <h2>Delete donation</h2>
        <br />

        <select name="id">
            <?php
            require_once '../business-logic-layer/donations-logic.php';
            $donationType = getAllDonation();
            foreach ($donationType as $item) {
                echo "<option value='$item->id'>$item->payment</option>";
            }
            ?>
        </select>

        <input type="hidden" name="command" value="delete" />

        <button>DELETE !!</button>
    </form>

    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>family</th>
                <th>tel</th>
                <th>sum</th>
                <th>auth</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            <?php
            require_once '../business-logic-layer/donations-logic.php';
            $donations = getAllDonation();

            foreach ($donations as $item) {
                echo "<tr>"
                    . "<td>$item->name</td>"
                    . "<td>$item->family</td>"
                    . "<td>$item->tel</td>"
                    . "<td>$item->sum</td>"
                    . "<td>$item->payment</td>"
                    . "<td>$item->memo</td>"
                    . "<td><button name='id' value='$item->id'>✖️</button>"
                    . "</tr>";
            }
            ?>
        </tbody>
    </table>
    <input type="hidden" name="command" value="delete" />
    </form>
</body>

</html>