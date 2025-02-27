using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class FixOwnedEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Authorization_AuthorizedBy",
                table: "LogEntries",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Authorization_ConsentProvided",
                table: "LogEntries",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Department",
                table: "LogEntries",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Outcome",
                table: "LogEntries",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PatientId",
                table: "LogEntries",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProcedureDetails_Notes",
                table: "LogEntries",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProcedureDetails_Status",
                table: "LogEntries",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProcedureDetails_Type",
                table: "LogEntries",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Authorization_AuthorizedBy",
                table: "LogEntries");

            migrationBuilder.DropColumn(
                name: "Authorization_ConsentProvided",
                table: "LogEntries");

            migrationBuilder.DropColumn(
                name: "Department",
                table: "LogEntries");

            migrationBuilder.DropColumn(
                name: "Outcome",
                table: "LogEntries");

            migrationBuilder.DropColumn(
                name: "PatientId",
                table: "LogEntries");

            migrationBuilder.DropColumn(
                name: "ProcedureDetails_Notes",
                table: "LogEntries");

            migrationBuilder.DropColumn(
                name: "ProcedureDetails_Status",
                table: "LogEntries");

            migrationBuilder.DropColumn(
                name: "ProcedureDetails_Type",
                table: "LogEntries");
        }
    }
}
